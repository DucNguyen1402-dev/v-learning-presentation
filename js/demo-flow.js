(() => {
  const navigationKeys = [
    "ArrowDown",
    "ArrowRight",
    "ArrowUp",
    "ArrowLeft",
    "Home",
    "End",
  ];

  const initializeDemoFlow = () => {
    document.querySelectorAll("[data-demo-window]").forEach((windowElement) => {
      if (windowElement.dataset.demoReady) return;

      const panels = Array.from(
        windowElement.querySelectorAll("[data-demo-panel]"),
      );
      const counter = windowElement.querySelector("[data-demo-counter]");
      let activeIndex = 0;

      const showPanel = (nextIndex) => {
        activeIndex = (nextIndex + panels.length) % panels.length;

        panels.forEach((panel, index) => {
          panel.hidden = index !== activeIndex;
          panel.classList.toggle("is-active", index === activeIndex);
        });

        if (counter)
          counter.textContent = `0${activeIndex + 1} / 0${panels.length}`;
      };

      document.addEventListener("keydown", (event) => {
        const activeSlide = windowElement.closest("[data-slide].is-active");
        if (!activeSlide || !navigationKeys.includes(event.key)) return;
        if (
          event.target instanceof HTMLInputElement ||
          event.target instanceof HTMLTextAreaElement
        )
          return;

        event.preventDefault();
        event.stopPropagation();

        if (event.key === "ArrowDown" || event.key === "ArrowRight")
          showPanel(activeIndex + 1);
        if (event.key === "ArrowUp" || event.key === "ArrowLeft")
          showPanel(activeIndex - 1);
        if (event.key === "Home") showPanel(0);
        if (event.key === "End") showPanel(panels.length - 1);
      });

      windowElement.dataset.demoReady = "true";
      showPanel(0);
    });
  };

  document.addEventListener("slides:loaded", initializeDemoFlow);
})();
