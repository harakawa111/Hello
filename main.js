document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('messageInput');
  const button = document.getElementById('submitButton');
  const list = document.getElementById('messageList');

  button.addEventListener('click', () => {
    const text = input.value.trim();
    if (text !== '') {
      const li = document.createElement('li');
      li.textContent = text;
      list.appendChild(li);
      input.value = ''; // 入力欄をクリア
    }
  });
});
