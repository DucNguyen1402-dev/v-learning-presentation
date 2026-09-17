const updateFlowProgress = (gallery, activeIndex) => {
  const progress = gallery.querySelector("[data-flow-progress]");
  const slides = [...gallery.querySelectorAll("[data-flow-slide]")];
  if (!progress || slides.length === 0) return;

  const ratio = ((activeIndex + 1) / slides.length) * 100;
  progress.style.width = `${Math.max(20, ratio)}%`;
};

const updateFlowStep = (gallery, activeIndex) => {
  const steps = [
    ...(gallery
      .closest(".user-flow-slide")
      ?.querySelectorAll(".flow-steps li") || []),
  ];

  steps.forEach((step, index) => {
    const isCurrent = index === activeIndex;
    step.classList.toggle("is-current", isCurrent);
    if (isCurrent) step.setAttribute("aria-current", "step");
    else step.removeAttribute("aria-current");
  });
};

const flowGalleryActions = new WeakMap();

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
  updateFlowStep(gallery, activeIndex);
};

const bindFlowGalleryControls = (gallery) => {
  const slides = [...gallery.querySelectorAll("[data-flow-slide]")];
  if (!slides.length) return;

  flowGalleryActions.set(gallery, (direction) => {
    const activeIndex = slides.findIndex((slide) =>
      slide.classList.contains("is-active"),
    );
    const nextIndex = (activeIndex + direction + slides.length) % slides.length;

    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === nextIndex);
    });
    updateFlowProgress(gallery, nextIndex);
    updateFlowStep(gallery, nextIndex);
  });
};

const bindFlowKeyboardControls = () => {
  if (document.body.dataset.flowKeyboardBound === "true") return;

  document.addEventListener("keyup", (event) => {
    if (event.target.closest("input, textarea, select, [contenteditable]"))
      return;

    const gallery = document.querySelector(
      ".user-flow-slide.is-active .flow-gallery",
    );
    const changeSlide = gallery && flowGalleryActions.get(gallery);
    if (!changeSlide) return;

    if (event.code === "KeyA") {
      event.preventDefault();
      event.stopPropagation();
      changeSlide(-1);
    }

    if (event.code === "KeyD") {
      event.preventDefault();
      event.stopPropagation();
      changeSlide(1);
    }
  });

  document.body.dataset.flowKeyboardBound = "true";
};

const setupFlowGalleries = () => {
  document.querySelectorAll(".flow-gallery").forEach((gallery) => {
    renderFlowGallery(gallery);
    bindFlowGalleryControls(gallery);
  });
  bindFlowKeyboardControls();
};

document.addEventListener("DOMContentLoaded", setupFlowGalleries);
document.addEventListener("slides:loaded", setupFlowGalleries);
window.addEventListener("load", setupFlowGalleries);
