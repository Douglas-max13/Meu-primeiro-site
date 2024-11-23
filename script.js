// Função para carregar curtidas e comentários do LocalStorage
function carregarDados() {
  document.querySelectorAll('article').forEach((article, index) => {
    const likesCount = localStorage.getItem(`likes-${index}`) || 0;
    article.querySelector('.likes-count').textContent = likesCount;

    const comments = JSON.parse(localStorage.getItem(`comments-${index}`)) || [];
    const commentList = article.querySelector('.lista-comentarios');
    commentList.innerHTML = ''; // Limpa os comentários
    comments.forEach(comment => {
      const newComment = document.createElement('li');
      newComment.textContent = comment;
      commentList.appendChild(newComment);
    });
  });
}

// Salvar curtidas no LocalStorage
document.querySelectorAll('.like-btn').forEach((button, index) => {
  button.addEventListener('click', function () {
    const countSpan = this.nextElementSibling;
    let count = parseInt(countSpan.textContent);
    count++;
    countSpan.textContent = count;
    localStorage.setItem(`likes-${index}`, count);
  });
});

// Salvar comentários no LocalStorage
document.querySelectorAll('.comentar-btn').forEach((button, index) => {
  button.addEventListener('click', function () {
    const input = this.previousElementSibling;
    const commentText = input.value.trim();
    if (commentText) {
      const commentList = this.nextElementSibling;
      const newComment = document.createElement('li');
      newComment.textContent = commentText;
      commentList.appendChild(newComment);

      // Salva no LocalStorage
      const comments = JSON.parse(localStorage.getItem(`comments-${index}`)) || [];
      comments.push(commentText);
      localStorage.setItem(`comments-${index}`, JSON.stringify(comments));

      input.value = ''; // Limpa o campo de entrada
    }
  });
});

// Carrega os dados ao iniciar
window.addEventListener('load', carregarDados);