const sunsetButton = document.getElementById('sunsetButton');
const sunsetImage = document.getElementById('sunsetImage');

const displaySunset = () => {
  sunsetImage.classList.toggle('hidden');
}

window.onload = () => {
  sunsetButton.addEventListener('click', () => displaySunset());
}
