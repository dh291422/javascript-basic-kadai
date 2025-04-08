const btn = document.getElementById('btn');
if (btn.addEventListener('click', () => {
  const text = document.getElementById('text');
  text.textContent = 'ボタンをクリックしました';
}));