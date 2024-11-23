// Configuração Firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO.firebaseapp.com",
  databaseURL: "https://SEU_DB.firebaseio.com",
  projectId: "SEU_PROJETO_ID",
  storageBucket: "SEU_STORAGE.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

// Inicializando Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Salvando um comentário
document.querySelectorAll('.comentar-btn').forEach((button, index) => {
  button.addEventListener('click', function () {
    const input = this.previousElementSibling;
    const commentText = input.value.trim();
    if (commentText) {
      db.ref(`posts/${index}/comments`).push(commentText); // Salva no Firebase
    }
  });
});