// Copy contract address
document.getElementById('copyBtn').addEventListener('click', () => {
  const contractInput = document.getElementById('contractAddress');
  contractInput.select();
  contractInput.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand('copy');

  alert('Contract address copied to clipboard!');
});

// Powerball generator with pop animation and confetti
function generatePowerballNumbers() {
  const mainNumbers = [];
  while(mainNumbers.length < 5){
    const num = Math.floor(Math.random() * 69) + 1;
    if(!mainNumbers.includes(num)) mainNumbers.push(num);
  }

  const powerball = Math.floor(Math.random() * 26) + 1;

  const numbersContainer = document.getElementById('numbers');
  numbersContainer.innerHTML = '';

  const popSound = document.getElementById('popSound');

  // Main balls with staggered pop
  mainNumbers.forEach((num, i) => {
    const ball = document.createElement('div');
    ball.className = 'ball main';
    ball.textContent = num;
    ball.style.animationDelay = `${i * 0.1}s`;
    numbersContainer.appendChild(ball);

    // Play pop sound
    setTimeout(() => {
      popSound.currentTime = 0;
      popSound.play();
    }, i * 100);
  });

  // Powerball pops last
  const powerBallDiv = document.createElement('div');
  powerBallDiv.className = 'ball powerball';
  powerBallDiv.textContent = powerball;
  powerBallDiv.style.animationDelay = `${mainNumbers.length * 0.1}s`;
  numbersContainer.appendChild(powerBallDiv);

  setTimeout(() => {
    popSound.currentTime = 0;
    popSound.play();
  }, mainNumbers.length * 100);

  // Continuous confetti for 2 seconds
  const duration = 2000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#ff3c3c', '#ffb74d', '#ffffff']
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#ff3c3c', '#ffb74d', '#ffffff']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

document.getElementById('generateBtn').addEventListener('click', generatePowerballNumbers);

// Generate numbers on page load
generatePowerballNumbers();sc
