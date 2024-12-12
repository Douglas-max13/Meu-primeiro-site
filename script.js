// Navegação do Carrossel
const items = document.querySelectorAll('.carrossel-item');
let currentItem = 0;

document.getElementById('prevBtn').addEventListener('click', () => {
  items[currentItem].classList.remove('active');
  currentItem = (currentItem === 0) ? items.length - 1 : currentItem - 1;
  items[currentItem].classList.add('active');
});

document.getElementById('nextBtn').addEventListener('click', () => {
  items[currentItem].classList.remove('active');
  currentItem = (currentItem === items.length - 1) ? 0 : currentItem + 1;
  items[currentItem].classList.add('active');
});

// Gerenciar Curtidas
document.querySelectorAll('.like-btn').forEach((button, index) => {
  const postId = `post-${index}`;
  const countSpan = button.nextElementSibling;

  // Recuperar curtidas salvas
  const savedLikes = localStorage.getItem(postId) || 0;
  countSpan.textContent = savedLikes;

  button.addEventListener('click', () => {
    let count = parseInt(countSpan.textContent) + 1;
    countSpan.textContent = count;
    localStorage.setItem(postId, count); // Salvar curtidas
  });
});

// Gerenciar Comentários
document.querySelectorAll('.comentar-btn').forEach((button, index) => {
  const commentList = button.nextElementSibling;
  const commentInput = button.previousElementSibling;
  const postId = `comments-${index}`;

  // Recuperar comentários salvos
  const savedComments = JSON.parse(localStorage.getItem(postId)) || [];
  savedComments.forEach(comment => {
    const li = document.createElement('li');
    li.textContent = comment;
    commentList.appendChild(li);
  });

  button.addEventListener('click', () => {
    const comment = commentInput.value.trim();
    if (comment) {
      const li = document.createElement('li');
      li.textContent = comment;
      commentList.appendChild(li);

      // Salvar comentário no localStorage
      savedComments.push(comment);
      localStorage.setItem(postId, JSON.stringify(savedComments));
      commentInput.value = '';
    }
  });
});
