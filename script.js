let timeoutId;
let timeoutId1;
const delay = 5000; // время в миллисекундах
const delay_button = 100;
let isActive1= false

const musicPanelArea = document.querySelector('.music_panel_area');
const soundtrackButton = document.querySelector('.soundtrack_button')
const musicPanelHidden = document.querySelector('.music_panel_hidden')

const hidePanel = () => {
    musicPanelArea.classList.add('hidden');
    musicPanelHidden.classList.add('open');
};

const showPanel = () => {
    musicPanelArea.classList.remove('hidden');
    musicPanelHidden.classList.remove('open');
    clearTimeout(timeoutId);
    timeoutId = setTimeout(hidePanel, delay);
};

document.body.addEventListener('mousemove', (event) => {
    if (musicPanelArea.contains(event.target)) {
        showPanel();
    }
});

window.onload = () => {
    timeoutId = setTimeout(hidePanel, delay);
};

// доделать надо
const likeButtons = document.querySelectorAll('#like, #like_button');

// Функция для переключения активного состояния
function toggleLike() {
    likeButtons.forEach(button => {
        button.classList.toggle('active');
    });
}

// Добавляем обработчик событий на каждую кнопку "like"
likeButtons.forEach(button => {
    button.addEventListener('click', toggleLike);
});