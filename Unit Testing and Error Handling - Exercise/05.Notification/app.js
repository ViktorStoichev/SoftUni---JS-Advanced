function notify(message) {
  const notificationElement = document.getElementById('notification');
  notificationElement.textContent = message;
  notificationElement.style.display = 'block';

  notificationElement.addEventListener('click', function () {
    notificationElement.style.display = 'none';
  })
}