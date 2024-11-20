document.querySelectorAll('.like-btn').forEach(button => {
  button.addEventListener('click', function() {
    let countSpan = this.nextElementSibling;
    let count = parseInt(countSpan.textContent);
    countSpan.textContent = count + 1;
  });
});

document.querySelectorAll('.comentar-btn').forEach(button => {
  button.addEventListener('click', function() {
    const input = this.previousElementSibling;
    const commentText = input.value.trim();
    if (commentText) {
      const commentList = this.nextElementSibling;
      const newComment = document.createElement('li');
      newComment.textContent = commentText;
      commentList.appendChild(newComment);
      input.value = ''; // Limpa o campo de entrada
    }
  });
});

let currentIndex = 0;
const items = document.querySelectorAll('.carrossel-item');
const totalItems = items.length;

document.getElementById('nextBtn').addEventListener('click', function() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalItems;
  items[currentIndex].classList.add('active');
  updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', function() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  items[currentIndex].classList.add('active');
  updateCarousel();
});

function updateCarousel() {
  items.forEach((item, index) => {
    item.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
}