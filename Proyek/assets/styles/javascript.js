let button = document.querySelector('#button');
let log = document.querySelector('#log');
button.addEventListener('mouseup', logMouseButton);

function logMouseButton(e) {
  if (typeof e === 'object') {
    switch (e.button) {
      case 0:
        log.textContent = 'Thank you for visiting, have a nice day ♥ ♥ ♥';
        break;
      case 1:
        log.textContent = 'Thank you for visiting, have a niye day ♥ ♥ ♥';
        break;
      case 2:
        log.textContent = 'Thank you for visiting, have a niye day ♥ ♥ ♥';
        break;
      default:
        log.textContent = `Unknown button code: ${e.button}`;
    }
  }
}