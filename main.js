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

  const botReplies = [
    "Remember to drink enough water today!",
    "If you feel unwell, don't hesitate to consult a doctor.",
    "A balanced diet is key to good health.",
    "Regular exercise helps keep your mind and body fit.",
    "Wash your hands frequently to prevent infections.",
    "Mental health is as important as physical health. Take a deep breath!",
    "If you have a fever, make sure to rest and monitor your temperature.",
    "Need to book an appointment? Just let me know!"
  ];

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
});
