document.addEventListener("DOMContentLoaded", () => {
  const dragState = { viewport: null, startX: 0, startScrollLeft: 0 };

  const updateProgress = (viewport) => {
    const progress = viewport
      .closest(".flow-gallery")
      ?.querySelector("[data-flow-progress]");
    if (!progress) return;
    const scrollableWidth = viewport.scrollWidth - viewport.clientWidth;
    const ratio =
      scrollableWidth > 0 ? viewport.scrollLeft / scrollableWidth : 0;
    progress.style.width = `${Math.max(30, ratio * 70 + 30)}%`;
  };

  document.addEventListener("pointerdown", (event) => {
    const viewport = event.target.closest("[data-flow-viewport]");
    if (!viewport) return;
    dragState.viewport = viewport;
    dragState.startX = event.clientX;
    dragState.startScrollLeft = viewport.scrollLeft;
    viewport.classList.add("is-dragging");
    viewport.setPointerCapture?.(event.pointerId);
  });

  document.addEventListener("pointermove", (event) => {
    const { viewport } = dragState;
    if (!viewport) return;
    viewport.scrollLeft =
      dragState.startScrollLeft - (event.clientX - dragState.startX);
    updateProgress(viewport);
  });

  const stopDragging = () => {
    dragState.viewport?.classList.remove("is-dragging");
    dragState.viewport = null;
  };

  document.addEventListener("pointerup", stopDragging);
  document.addEventListener("pointercancel", stopDragging);

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-flow-scroll]");
    if (!button) return;
    const viewport = button
      .closest(".flow-gallery")
      ?.querySelector("[data-flow-viewport]");
    if (!viewport) return;
    const distance = viewport.clientWidth * 0.72;
    viewport.scrollBy({
      left: button.dataset.flowScroll === "right" ? distance : -distance,
      behavior: "smooth",
    });
  });

  document.addEventListener(
    "scroll",
    (event) => {
      if (event.target.matches?.("[data-flow-viewport]"))
        updateProgress(event.target);
    },
    true,
  );
});
