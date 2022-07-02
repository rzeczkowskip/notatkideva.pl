const useToggle = (trigger, targets, openClass = 'show') => {
  const onTriggerClick = (e) => {
    e.preventDefault();

    targets.forEach((item) => item.classList.toggle(openClass));
  };

  trigger.addEventListener('click', onTriggerClick);
  trigger.addEventListener('touch', onTriggerClick);
};

export default useToggle;
