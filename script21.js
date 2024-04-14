const nameInput = document.getElementById('name-input');
const commentInput = document.getElementById('comment-input');
const submitComment = document.getElementById('submit-comment');
const comments = document.getElementById('comments');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  if (nameInput.value === '') {
    nameInput.value = transcript;
    speak(transcript);
  } else {
    commentInput.value = transcript;
  }
};

submitComment.addEventListener('click', () => {
  const name = nameInput.value;
  const comment = commentInput.value;
  const commentElement = document.createElement('p');
  commentElement.textContent = `${name}: ${comment}`;
  comments.appendChild(commentElement);
  nameInput.value = '';
  commentInput.value = '';
});

nameInput.addEventListener('click', () => {
  recognition.start();
});

commentInput.addEventListener('click', () => {
  recognition.start();
});

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}