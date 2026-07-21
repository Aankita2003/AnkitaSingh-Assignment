const submitBtn = document.getElementById('submit-btn');
  const resetBtn = document.getElementById('reset-btn');
  const statusMsg = document.getElementById('status-msg');
  const form = document.getElementById('wp-form');

  submitBtn.addEventListener('click', () => {
    const agreed = document.getElementById('cert-agree').checked;
    if (!agreed) {
      alert('Please confirm the certification statement before submitting.');
      return;
    }
    statusMsg.style.display = 'block';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitted';
  });

  resetBtn.addEventListener('click', () => {
    form.reset();
    statusMsg.style.display = 'none';
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit report';
  });