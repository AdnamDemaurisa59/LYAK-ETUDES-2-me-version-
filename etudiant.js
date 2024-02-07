document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour ajouter un message à la bulle de messagerie
    function addMessage(message, isUserMessage) {
      const messageContainer = document.getElementById('messageContainer');
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      messageElement.className = isUserMessage ? 'user-message' : 'system-message';
  
      messageContainer.appendChild(messageElement);
    }
  
    // Exemples d'utilisation
    addMessage("Bonjour !", true); // Message de l'utilisateur
    addMessage("Bienvenue sur notre site.", false); // Message système
  });

  