(() => {
  const initializeTechStack = () => {
    document.querySelectorAll("[data-tech-window]").forEach((windowElement) => {
      if (windowElement.dataset.techReady) return;

      const tabs = Array.from(
        windowElement.querySelectorAll("[data-tech-tab]"),
      );
      const panels = Array.from(
        windowElement.querySelectorAll("[data-tech-panel]"),
      );
      const counter = windowElement.querySelector("[data-tech-counter]");
      let activeIndex = 0;

      const showPanel = (nextIndex) => {
        activeIndex = (nextIndex + panels.length) % panels.length;
        const activePanel = panels[activeIndex];

        tabs.forEach((tab, index) => {
          const isActive = index === activeIndex;
          tab.classList.toggle("is-active", isActive);
          tab.setAttribute("aria-selected", String(isActive));
          tab.tabIndex = isActive ? 0 : -1;
        });

        panels.forEach((panel, index) => {
          panel.hidden = index !== activeIndex;
          panel.classList.toggle("is-active", index === activeIndex);
        });

        if (counter)
          counter.textContent = `0${activeIndex + 1} / 0${panels.length}`;
        activePanel?.querySelector("h2")?.focus?.();
      };

      tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => showPanel(index));
        tab.addEventListener("keydown", (event) => {
          if (
            [
              "ArrowDown",
              "ArrowRight",
              "ArrowUp",
              "ArrowLeft",
              "Home",
              "End",
            ].includes(event.key)
          )
            event.stopPropagation();

          if (event.key === "ArrowDown" || event.key === "ArrowRight") {
            event.preventDefault();
            showPanel(index + 1);
            tabs[(index + 1) % tabs.length].focus();
          }
          if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
            event.preventDefault();
            showPanel(index - 1);
            tabs[(index - 1 + tabs.length) % tabs.length].focus();
          }
          if (event.key === "Home" || event.key === "End") {
            event.preventDefault();
            const targetIndex = event.key === "Home" ? 0 : tabs.length - 1;
            showPanel(targetIndex);
            tabs[targetIndex].focus();
          }
        });
      });

      windowElement.addEventListener("keydown", (event) => {
        if (
          ![
            "ArrowDown",
            "ArrowRight",
            "ArrowUp",
            "ArrowLeft",
            "Home",
            "End",
          ].includes(event.key)
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

      windowElement.dataset.techReady = "true";
      showPanel(0);
    });
  };

  document.addEventListener("slides:loaded", initializeTechStack);
})();
