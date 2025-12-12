// Configuration du widget
const widgetConfig = {
  apiEndpoint: 'https://pegintichat.peginti.e-monsite.com/chat',
  bubbleColor: '#3498db',
  bubbleTextColor: '#fff',
};

// Fonction d'envoi de messages
async function sendMessage(message) {
  try {
    const response = await fetch(widgetConfig.apiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    addMessage('Pegintichat', data.reply);
  } catch (error) {
    console.error('Erreur lors de l’envoi du message :', error);
    addMessage('Pegintichat', '⚠️ Impossible d’envoyer le message.');
  }
}

// Création de l’interface du widget
function createWidget() {
  // Bulle flottante
  const bubble = document.createElement('div');
  bubble.innerText = '💬';
  bubble.style.position = 'fixed';
  bubble.style.bottom = '20px';
  bubble.style.right = '20px';
  bubble.style.width = '60px';
  bubble.style.height = '60px';
  bubble.style.borderRadius = '50%';
  bubble.style.backgroundColor = widgetConfig.bubbleColor;
  bubble.style.color = widgetConfig.bubbleTextColor;
  bubble.style.display = 'flex';
  bubble.style.alignItems = 'center';
  bubble.style.justifyContent = 'center';
  bubble.style.cursor = 'pointer';
  bubble.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
  document.body.appendChild(bubble);

  // Fenêtre de chat
  const chatWindow = document.createElement('div');
  chatWindow.style.position = 'fixed';
  chatWindow.style.bottom = '90px';
  chatWindow.style.right = '20px';
  chatWindow.style.width = '300px';
  chatWindow.style.height = '400px';
  chatWindow.style.backgroundColor = '#fff';
  chatWindow.style.border = '1px solid #ccc';
  chatWindow.style.borderRadius = '8px';
  chatWindow.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
  chatWindow.style.display = 'none';
  chatWindow.style.flexDirection = 'column';
  chatWindow.style.overflow = 'hidden';
  document.body.appendChild(chatWindow);

  // Zone des messages
  const messages = document.createElement('div');
  messages.style.flex = '1';
  messages.style.padding = '10px';
  messages.style.overflowY = 'auto';
  chatWindow.appendChild(messages);

  // Zone de saisie
  const inputContainer = document.createElement('div');
  inputContainer.style.display = 'flex';
  inputContainer.style.borderTop = '1px solid #ccc';
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Écrire un message...';
  input.style.flex = '1';
  input.style.border = 'none';
  input.style.padding = '10px';
  const sendBtn = document.createElement('button');
  sendBtn.innerText = 'Envoyer';
  sendBtn.style.border = 'none';
  sendBtn.style.backgroundColor = widgetConfig.bubbleColor;
  sendBtn.style.color = widgetConfig.bubbleTextColor;
  sendBtn.style.padding = '10px';
  inputContainer.appendChild(input);
  inputContainer.appendChild(sendBtn);
  chatWindow.appendChild(inputContainer);

  // Fonction d’ajout de message
  window.addMessage = function(sender, text) {
    const msg = document.createElement('div');
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    msg.style.marginBottom = '8px';
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  };

  // Actions
  bubble.addEventListener('click', () => {
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
  });

  sendBtn.addEventListener('click', () => {
    const message = input.value.trim();
    if (message) {
      addMessage('Vous', message);
      sendMessage(message);
      input.value = '';
    }
  });
}

// Initialisation du widget
document.addEventListener('DOMContentLoaded', createWidget);￼Enter
