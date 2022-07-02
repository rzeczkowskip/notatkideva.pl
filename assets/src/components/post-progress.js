const usePostProgress = (selector) => {
  document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelector(selector);
    if (!progressBar) {
      return;
    }

    const articleContainer = progressBar.parentElement;
    let scrollProgressLimit;

    const getCurrentProgress = () => {
      if (!scrollProgressLimit) {
        return 0;
      }

      const position = (window.scrollY * 100) / scrollProgressLimit;
      return Math.min(Math.max(0, position), 100);
    };

    const onScroll = () => {
      progressBar.style.width = `${getCurrentProgress()}%`;
    };

    const recalculateMinMaxPosition = () => {
      scrollProgressLimit = articleContainer.offsetHeight - articleContainer.offsetTop;
      onScroll();
    };

    window.addEventListener('resize', recalculateMinMaxPosition);
    window.addEventListener('scroll', onScroll);
    window.addEventListener('load', recalculateMinMaxPosition);

    recalculateMinMaxPosition();
    onScroll();
  });
};

export default usePostProgress;
