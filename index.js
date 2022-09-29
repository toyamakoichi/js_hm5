const createButton = document.querySelector('#create');
createButton.addEventListener('click', add);
const audio = new Audio('audio/inecraft_eating.mp3');
function add() {
    let hp = 100;
    const tamagochi = document.createElement('div');
    tamagochi.className = 'tamagochi';
    space.append(tamagochi);
    const img = document.createElement('img');
    img.src = "img/alive.png";
    tamagochi.append(img);
    const health = document.createElement('p');
    const heart = document.createElement('i');
    heart.className = "fa-solid fa-heart"
    health.innerHTML = hp;
    health.append(heart);
    tamagochi.append(health);
    const feedButton = document.createElement('button');
    feedButton.className = 'feed';
    tamagochi.append(feedButton);
    feedButton.addEventListener('click', () => {
        img.src = 'img/feed.png'
        audio.play();
        const buff = Math.floor(hp + hp * 0.2);
        if (buff >= 100) { hp += 100 - hp; }
        else { hp = buff; }

    });
    setInterval(() => {
        if (hp > 0) {
            img.src = 'img/alive.png';
            health.innerHTML = hp;
            health.append(heart);
            hp -= 1;
        }
        else {
            health.innerHTML = 'dead : (';
            img.src = 'img/dead.png';
            feedButton.setAttribute('disabled', true);
        }
    }, 200);

}

