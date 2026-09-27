(() => {
  const REVEAL_CLASS = "is-revealed";

  const revealNextCard = (list) => {
    const items = [...list.querySelectorAll(".agenda-card")];
    const hiddenItems = items.filter(
      (item) => !item.classList.contains(REVEAL_CLASS),
    );

    if (hiddenItems.length === 0) {
      // reset so the slide-in animation can be replayed on the next click
      items.forEach((item) => item.classList.remove(REVEAL_CLASS));
      return;
    }

    hiddenItems[0].classList.add(REVEAL_CLASS);
  };

  const isContentAreaSlideActive = (list) =>
    list.closest("[data-slide]")?.classList.contains("is-active") ?? false;

  const setupContentAreaCards = () => {
    const list = document.querySelector(".cards-grid[data-reveal-list]");
    if (!list || list.dataset.revealBound === "true") return;

    list.addEventListener("click", () => revealNextCard(list));

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      if (!isContentAreaSlideActive(list)) return;

      event.preventDefault();
      revealNextCard(list);
    });

    list.dataset.revealBound = "true";
  };

  document.addEventListener("DOMContentLoaded", setupContentAreaCards);
  document.addEventListener("slides:loaded", setupContentAreaCards);
  window.addEventListener("load", setupContentAreaCards);
})();
