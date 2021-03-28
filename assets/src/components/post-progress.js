document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.querySelector('[data-post-progress]');
  if (!progressBar) {
    return;
  }

  const articleContainer = progressBar.parentElement;

  const textContainerPosition = {
    top: 0,
    bottom: 0,
  };

  const getCurrentProgress = () => {
    const scrollPosition = window.scrollY - textContainerPosition.bottom;

    const position = (scrollPosition / textContainerPosition.top) * 100;

    return Math.min(Math.max(0, position), 100);
  };

  const onScroll = () => {
    progressBar.style.width = `${getCurrentProgress()}%`;
  };

  const recalculateMinMaxPosition = () => {
    const articleEndPosition = articleContainer.offsetHeight + articleContainer.offsetTop;
    const scrollOffset = window.innerHeight * 0.9 + articleContainer.offsetTop;

    textContainerPosition.top = articleContainer.offsetTop;
    textContainerPosition.end = articleEndPosition - scrollOffset;

    onScroll();
  };

  window.addEventListener('resize', recalculateMinMaxPosition);
  window.addEventListener('scroll', onScroll);

  recalculateMinMaxPosition();
  onScroll();
});
