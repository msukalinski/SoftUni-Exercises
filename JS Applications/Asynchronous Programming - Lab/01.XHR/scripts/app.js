function loadRepos() {
   const resultElement = document.getElementById('res');

   const url = 'https://api.github.com/users/testnakov/repos';

   fetch(url)
      .then(response => response.json())
      .then(data => {
         resultElement.textContent = JSON.stringify(data);
      })
}