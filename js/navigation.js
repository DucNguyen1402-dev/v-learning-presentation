document.addEventListener("DOMContentLoaded", () => {
  const presentation = window.VLearningPresentation;
  presentation.init().catch((error) => {
    console.error(error);
  });

  document
    .querySelector('[data-action="previous"]')
    ?.addEventListener("click", () => {
      presentation.goTo(presentation.currentIndex - 1);
    });

  document
    .querySelector('[data-action="next"]')
    ?.addEventListener("click", () => {
      presentation.goTo(presentation.currentIndex + 1);
    });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight" ||
      event.key === " "
    ) {
      event.preventDefault();
    }

    if (event.key === "ArrowLeft")
      presentation.goTo(presentation.currentIndex - 1);
    if (event.key === "ArrowRight" || event.key === " ")
      presentation.goTo(presentation.currentIndex + 1);
  });
});
