import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['toggle'];

  connect() {
    this.toggleClass = this.data.get('class') || 'hidden';
  }

  toggle(e) {
    e.preventDefault();

    this.toggleTarget.classList.toggle(this.toggleClass);
  }
}
