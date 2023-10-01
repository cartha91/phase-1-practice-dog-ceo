console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imgUrl => {
                let img = document.createElement('img');
                img.src = imgUrl;
                document.body.appendChild(img);
            });
        })
        .catch(error => console.error('Error:', error));
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        let breeds = data.message;
        let ul = document.querySelector('ul');
        for(let breed in breeds) {
            let li = document.createElement('li');
            li.textContent = breed;
            ul.appendChild(li);
        }
    })
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        let breeds = data.message;
        let ul = document.querySelector('ul');
        for (let breed in breeds) {
            let li = document.createElement('li');
            li.textContent = breed;
            li.addEventListener('click', function() {
                this.style.color = 'darkmagenta';
            });
            ul.appendChild(li);
        }
    })
    .catch(error => console.error('Error:', error))
});

document.addEventListener('DOMContentLoaded', function() {
    let breeds;

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        breeds = data.message;
        renderBreeds(breeds);
    })
    .catch(error => console.error('Error:', error));
    let dropdown = document.querySelector('select');
    dropdown.addEventListener('change', function(){
        renderBreeds(breeds, this.value);
    });
    
    function renderBreeds(breeds, filterLetter = '') {
        let ul = document.querySelector('ul');
        ul.innerHTML = '';
        for (let breed in breeds) {
            if (filterLetter && breed[0] !== filterLetter) continue;
            let li = document.createElement('li');
            li.textContent = breed;
            li.addEventListener('click', function() {
                this.style.color = 'darkmagenta';
            });
            ul.appendChild(li);
        }
    }
});


