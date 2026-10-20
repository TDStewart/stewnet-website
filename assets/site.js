'use strict';
document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const address = button.dataset.copy;
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(address);
      const status = document.querySelector('.toast');
      status.textContent = 'Server address copied!';
      status.classList.add('show');
      window.setTimeout(() => status.classList.remove('show'), 2500);
    } catch {
      const status = document.querySelector('.toast');
      status.textContent = 'Select and copy this address: ' + address;
      status.classList.add('show');
      window.setTimeout(() => status.classList.remove('show'), 8000);
    }
  });
});
