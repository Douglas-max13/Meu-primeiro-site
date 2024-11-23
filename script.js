// Adicionando animação de notificação ao curtir
document.querySelectorAll('.like-btn').forEach((button, index) => {
  button.addEventListener('click', function () {
    const countSpan = this.nextElementSibling;
    let count = parseInt(countSpan.textContent);
    count++;
    countSpan.textContent = count;

    // Mostrando uma notificação visual
    const notification = document.createElement('div');
    notification.textContent = 'Você curtiu este post!';
    notification.classList.add('notification');
    document.body.appendChild(notification);

    // Removendo a notificação após 2 segundos
    setTimeout(() => notification.remove(), 2000);
  });
});

// Estilo para a notificação
const style = document.createElement('style');
style.innerHTML = `
  .notification {
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    animation: fadeOut 2s forwards;
  }
  @keyframes fadeOut {
    0% { opacity: 1; }
    100% { opacity: 0; transform: translateY(-10px); }
  }
`;
document.head.appendChild(style);