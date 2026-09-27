const SLIDE_INDEX_STORAGE_KEY = "vlearning-current-slide-index";

window.VLearningPresentation = {
  slides: [],
  currentIndex: 0,
  loadedStyles: new Set(),

  async init() {
    await this.loadSlides();
    this.currentIndex = this.restoreIndex();
    this.update();
  },

  restoreIndex() {
    const saved = Number(sessionStorage.getItem(SLIDE_INDEX_STORAGE_KEY));
    if (Number.isInteger(saved) && saved >= 0 && saved < this.slides.length) {
      return saved;
    }
    return 0;
  },

  async loadSlides() {
    const container = document.querySelector("[data-presentation]");
    if (!container) return;

    const response = await fetch("slides/manifest.json");
    if (!response.ok) throw new Error("Không thể tải danh sách slide.");

    const slideEntries = await response.json();
    const slideMarkup = await Promise.all(
      slideEntries.map(async ({ html, css }) => {
        if (css) await this.loadStyle(css);

        const slideResponse = await fetch(html);
        if (!slideResponse.ok) throw new Error(`Không thể tải ${html}.`);
        return slideResponse.text();
      }),
    );

    container.innerHTML = slideMarkup.join("\n");
    this.slides = Array.from(container.querySelectorAll("[data-slide]"));
    document.dispatchEvent(new CustomEvent("slides:loaded"));
  },

  loadStyle(stylePath) {
    if (this.loadedStyles.has(stylePath)) return Promise.resolve();

    return new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = stylePath;
      link.dataset.slideStyle = stylePath;
      link.addEventListener("load", () => {
        this.loadedStyles.add(stylePath);
        resolve();
      });
      link.addEventListener("error", () => {
        reject(new Error(`Không thể tải stylesheet ${stylePath}.`));
      });
      document.head.append(link);
    });
  },

  goTo(index) {
    if (!this.slides.length) return;
    this.currentIndex = (index + this.slides.length) % this.slides.length;
    sessionStorage.setItem(SLIDE_INDEX_STORAGE_KEY, this.currentIndex);
    this.update();
  },

  update() {
    this.slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === this.currentIndex);
      slide.setAttribute(
        "aria-hidden",
        index === this.currentIndex ? "false" : "true",
      );
    });

    const counter = document.querySelector("[data-slide-count]");
    if (counter)
      counter.textContent = `${this.currentIndex + 1} / ${this.slides.length}`;

    const resetScroll = () => {
      const scroller = document.scrollingElement;
      if (scroller) scroller.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    resetScroll();
    requestAnimationFrame(resetScroll);
  },
};
