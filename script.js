// Generate a random CAPTCHA
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters[randomIndex];
    }
    return captcha;
  }
  
  // Update the CAPTCHA on the screen
  function updateCaptcha() {
    const captchaText = generateCaptcha();
    document.getElementById('captcha').textContent = captchaText;
    return captchaText;
  }
  
  // Initial CAPTCHA setup
  let currentCaptcha = updateCaptcha();
  
  // Refresh button
  document.getElementById('refresh').addEventListener('click', () => {
    currentCaptcha = updateCaptcha();
    document.getElementById('captcha-input').value = '';
    document.getElementById('message').textContent = '';
  });
  
  // Verify button
  document.getElementById('verify').addEventListener('click', () => {
    const userInput = document.getElementById('captcha-input').value;
    const messageDiv = document.getElementById('message');
    if (userInput === currentCaptcha) {
      messageDiv.textContent = '✅ CAPTCHA Verified Successfully!';
      messageDiv.style.color = 'green';
    } else {
      messageDiv.textContent = '❌ Incorrect CAPTCHA. Please try again.';
      messageDiv.style.color = 'red';
    }
  });