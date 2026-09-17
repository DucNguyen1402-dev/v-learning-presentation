const updateFlowProgress = (gallery, activeIndex) => {
  const progress = gallery.querySelector("[data-flow-progress]");
  const slides = [...gallery.querySelectorAll("[data-flow-slide]")];
  if (!progress || slides.length === 0) return;

  const ratio = ((activeIndex + 1) / slides.length) * 100;
  progress.style.width = `${Math.max(20, ratio)}%`;
};

const renderFlowGallery = (gallery) => {
  const slides = [...gallery.querySelectorAll("[data-flow-slide]")];
  if (!slides.length) return;

  const currentIndex = slides.findIndex((slide) =>
    slide.classList.contains("is-active"),
  );
  const activeIndex = currentIndex >= 0 ? currentIndex : 0;

  slides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === activeIndex);
  });

  updateFlowProgress(gallery, activeIndex);
};

const bindFlowGalleryControls = (gallery) => {
  const slides = [...gallery.querySelectorAll("[data-flow-slide]")];
  if (!slides.length) return;

  const buttons = gallery.querySelectorAll("[data-flow-scroll]");
  const viewport = gallery.querySelector("[data-flow-viewport]");

  buttons.forEach((button) => {
    button.onclick = () => {
      const activeIndex = slides.findIndex((slide) =>
        slide.classList.contains("is-active"),
      );
      const nextIndex =
        (activeIndex +
          (button.dataset.flowScroll === "right" ? 1 : -1) +
          slides.length) %
        slides.length;

      slides.forEach((slide, index) => {
        slide.classList.toggle("is-active", index === nextIndex);
      });

      updateFlowProgress(gallery, nextIndex);
    };
  });

  viewport?.addEventListener("keydown", (event) => {
    const activeIndex = slides.findIndex((slide) =>
      slide.classList.contains("is-active"),
    );
    const nextIndex =
      (activeIndex + (event.key === "ArrowRight" ? 1 : -1) + slides.length) %
      slides.length;

    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      slides.forEach((slide, index) => {
        slide.classList.toggle("is-active", index === nextIndex);
      });
      updateFlowProgress(gallery, nextIndex);
    }
  });
};

const setupFlowGalleries = () => {
  document.querySelectorAll(".flow-gallery").forEach((gallery) => {
    renderFlowGallery(gallery);
    bindFlowGalleryControls(gallery);
  });
};

document.addEventListener("DOMContentLoaded", setupFlowGalleries);
document.addEventListener("slides:loaded", setupFlowGalleries);
window.addEventListener("load", setupFlowGalleries);
