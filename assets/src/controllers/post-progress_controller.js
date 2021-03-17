import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['progressBar'];

  minPosition = 0;

  maxPosition = 0;

  initialize() {
    this.onScroll = this.onScroll.bind(this);
    this.recalculateMinMaxPosition = this.recalculateMinMaxPosition.bind(this);
  }

  connect() {
    window.addEventListener('scroll', this.onScroll);
    window.addEventListener('resize', this.recalculateMinMaxPosition);

    this.onScroll();
    this.recalculateMinMaxPosition();
  }

  disconnect() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.recalculateMinMaxPosition);
  }

  onScroll() {
    this.progressBarTarget.style.width = `${this.getIndicatorWidth()}%`;
  }

  getIndicatorWidth() {
    const scrollPosition = window.scrollY - this.minPosition;

    const position = (scrollPosition / this.maxPosition) * 100;

    return Math.min(Math.max(0, position), 100);
  }

  recalculateMinMaxPosition() {
    const articleEndPosition = this.element.offsetHeight + this.element.offsetTop;
    const scrollOffset = window.innerHeight * 0.9 + this.element.offsetTop;

    this.minPosition = this.element.offsetTop;
    this.maxPosition = articleEndPosition - scrollOffset;

    this.onScroll();
  }
}
