(() => {
  const cursor = document.querySelector(".presentation-cursor");

  const isFlowSlideActive = () =>
    document.querySelector(".user-flow-slide.is-active") !== null;

  document.addEventListener("mousemove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    cursor.hidden = !isFlowSlideActive();
  });

  document.addEventListener("mousedown", (event) => {
    if (!isFlowSlideActive()) return;

    cursor.classList.add("clicking");

    const ripple = document.createElement("div");
    ripple.className = "presentation-ripple";

    ripple.style.left = `${event.clientX}px`;
    ripple.style.top = `${event.clientY}px`;

    document.body.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 500);
  });

  document.addEventListener("mouseup", () => {
    cursor.classList.remove("clicking");
  });
})();
