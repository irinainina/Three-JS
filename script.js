const params = new URLSearchParams(window.location.search);
const file = params.get('file');

if (file) {
  fetch(`markdown/${file}`)
    .then(res => res.ok ? res.text() : Promise.reject('Файл не найден'))
    .then(text => {
      document.getElementById('content').innerHTML = marked.parse(text);
    })
    .catch(err => {
      document.getElementById('content').innerHTML = `<p style="color:red;">Ошибка: ${err}</p>`;
    });
}
