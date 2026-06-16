function lockedProfile() {
    const mainElement = document.getElementById('main');
    mainElement.querySelector('.profile').remove();

    const url = 'http://localhost:3030/jsonstore/advanced/profiles';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            createNewProfile(Object.values(data));
        });

    function createNewProfile(data) {
        data.forEach(curUser => {
            const profileElement = document.createElement('div');
            profileElement.classList.add('profile');

            profileElement.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user1Locked" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user1Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user1Username" value="${curUser.username}" disabled readonly />
            <div class="user1Username hiddenInfo">
                <hr>
                <label>Email:</label>
                <input type="email" name="user1Email" value="${curUser.email}" disabled readonly />
                <label>Age:</label>
                <input type="email" name="user1Age" value="${curUser.age}" disabled readonly />
            </div>
    
            <button>Show more</button>`;

            profileElement.addEventListener('click', onShowMoreClick);

            mainElement.appendChild(profileElement);
        });
    }

    function onShowMoreClick(e) {
        const hiddenFields = e.currentTarget.querySelector('.user1Username');
        const radioUnlocked = e.currentTarget.querySelector('input[value="unlock"]');
        const button = e.currentTarget.querySelector('button');

        if (e.target.nodeName !== 'BUTTON') {
            return;
        }

        if (!radioUnlocked.checked) {
            return;
        }

        hiddenFields.classList.toggle('hiddenInfo');
        button.textContent = button.textContent === 'Show more' ? 'Hide it' : 'Show more';
    }
}