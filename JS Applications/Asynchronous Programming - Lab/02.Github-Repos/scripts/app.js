function loadRepos() {
	const usernameInputElement = document.getElementById('username');
	const reposUlElement = document.getElementById('repos');
	reposUlElement.innerHTML = '';

	const url = `https://api.github.com/users/${usernameInputElement.value}/repos`;
	
	fetch(url)
	.then(response => {
		if (!response.ok) {
			throw Error('404 Not Found');
		}
		
		return response.json();
	})
	.then(data => {
		createLiRepo(data);
	})
	.catch(error => {
		const errorLiElement = document.createElement('li');
		errorLiElement.textContent = error.message;

		reposUlElement.appendChild(errorLiElement);
	});

	function createLiRepo(data) {
		data.forEach(repo => {
			const liElement = document.createElement('li');

			const aElement = document.createElement('a');
			aElement.href = repo.html_url;
			aElement.textContent = repo.full_name;

			liElement.appendChild(aElement);
			reposUlElement.appendChild(liElement);
		});
	}
}