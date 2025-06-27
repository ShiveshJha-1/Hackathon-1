// Chatbot auto-reply logic for Swasthya Sathi

document.addEventListener('DOMContentLoaded', function () {
  const chatWindow = document.querySelector('.chatbot-window');
  const chatInput = document.querySelector('.chatbot-input input');
  const chatForm = document.querySelector('.chatbot-input');
  const sendButton = document.querySelector('.chatbot-input button');

  // Enable input and button
  chatInput.disabled = false;
  sendButton.disabled = false;
  sendButton.style.cursor = 'pointer';
  sendButton.style.opacity = '1';
  const botReplies = ['Hello Shivesh',''];

  function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chatbot-message ' + sender;
    msgDiv.textContent = text;
    chatWindow.appendChild(msgDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  chatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const userMsg = chatInput.value.trim();
    if (!userMsg) return;
    appendMessage(userMsg, 'user');
    chatInput.value = '';
    setTimeout(() => {
      const reply = botReplies[Math.floor(Math.random() * botReplies.length)];
      appendMessage(reply, 'bot');
    }, 700);
  });

  document.getElementById('sendBtn').onclick = async function() {
    const prompt = document.getElementById('userInput').value;
    const res = await fetch('http://localhost:3000/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    document.getElementById('chatResponse').innerText = data.response;
  };

  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');

  // Open/close menu
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('open');
    navOverlay.classList.toggle('open');
  });

  // Close menu on overlay click
  navOverlay.addEventListener('click', function() {
    navLinks.classList.remove('open');
    navOverlay.classList.remove('open');
  });

  // Close menu on link click (mobile)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('open');
      navOverlay.classList.remove('open');
    });
  });
});
