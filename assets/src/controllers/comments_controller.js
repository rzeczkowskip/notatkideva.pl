import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['form', 'formContainer', 'replyButton', 'cancelReplyButton', 'commentParentInput'];

  connect() {
    this.replyButtonTargets.forEach((el) => el.classList.remove('hidden'));
  }

  reply(e) {
    e.preventDefault();

    e.target.parentElement.after(this.formTarget);
    this.cancelReplyButtonTarget.classList.remove('hidden');
    this.commentParentInputTarget.value = e.target.dataset.comment;
  }

  cancelReply(e) {
    e.preventDefault();

    this.formContainerTarget.append(this.formTarget);
    this.commentParentInputTarget.value = 0;
    this.cancelReplyButtonTarget.classList.add('hidden');
  }
}
