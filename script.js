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
const PlaylistButtons = document.querySelectorAll('#add_playlist, #add_playlist_button');
const NextupButtons = document.querySelectorAll('#next_up, #next_up_button');

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

function togglePlaylist() {
    PlaylistButtons.forEach(button => {
        button.classList.toggle('active');
    });
}

// Добавляем обработчик событий на каждую кнопку "like"
PlaylistButtons.forEach(button => {
    button.addEventListener('click', togglePlaylist);
});

function toggleNextup() {
    NextupButtons.forEach(button => {
        button.classList.toggle('active');
    });
}

// Добавляем обработчик событий на каждую кнопку "like"
NextupButtons.forEach(button => {
    button.addEventListener('click', toggleNextup);
});

let isPlaying = false;

const playButton = document.querySelector('#play').parentNode;
const playIcon = document.querySelector('.play_icon');

function updateButtonState() {
    // Обновление состояния кнопки воспроизведения
    if (isPlaying) {
        playButton.innerHTML = `
        <svg version="1.1" id="play" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        width="100%" height="100%" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
        <path class="st0" d="M194.539,359.25h-26.967c-8.396,0-15.201-6.806-15.201-15.201V155.951c0-8.396,6.806-15.201,15.201-15.201
        h26.967c8.396,0,15.201,6.806,15.201,15.201v188.097C209.74,352.444,202.934,359.25,194.539,359.25z"/>
        <path class="st0" d="M332.429,359.25h-26.967c-8.396,0-15.201-6.806-15.201-15.201V155.951c0-8.396,6.806-15.201,15.201-15.201
        h26.967c8.396,0,15.201,6.806,15.201,15.201v188.097C347.63,352.444,340.824,359.25,332.429,359.25z"/>
        </svg>`;
        // Код для воспроизведения музыки здесь
    } else {
        playButton.innerHTML = `
        <svg version="1.1" id="play" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        width="100%" height="100%" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;"
        xml:space="preserve">
        <path class="st0" d="M174.152,357.323l166.105-94.435c9.82-5.583,9.834-19.731,0.025-25.332l-166.105-94.866
        c-9.718-5.55-21.807,1.468-21.807,12.659V344.65C152.369,355.83,164.434,362.849,174.152,357.323z"/>
        </svg>`;
        // Код для остановки музыки здесь
    }

    // Обновление иконки воспроизведения
    if (isPlaying) {
        playIcon.innerHTML = `
    <path d="M 500,1130 V 430 H 700 V 1130 Z" fill="black" stroke="black" stroke-width="10" />
    <path d="M 800,1130 V 430 H 1000 V 1130 Z" fill="black" stroke="black" stroke-width="10" />
`;
    } else {
        playIcon.innerHTML = `
        <path d="M550,1150l600-340c35-20,35-70,0-90l-600-340c-35-20-80,5-80,45v680C470,1160,515,1180,550,1150z" fill="black" />
    `;
    }
}

playButton.addEventListener('click', function() {
    isPlaying = !isPlaying; // Меняем состояние
    updateButtonState(); // Обновляем кнопки
});

// Обработчик события для второй кнопки (если она есть)
const secondPlayButton = document.querySelector('.play_button');
if (secondPlayButton) {
    secondPlayButton.addEventListener('click', function() {
        isPlaying = !isPlaying; // Меняем состояние
        updateButtonState(); // Обновляем кнопки
    });
}

// Глобальная переменная для состояния прямоугольника громкости
let isVolumeRectangleVisible = false;

// Обработчик события для кнопки громкости
document.getElementById('volume').addEventListener('click', function(event) {
    const rectangle = document.getElementById('volumeRectangle');

    isVolumeRectangleVisible = !isVolumeRectangleVisible; // Меняем состояние

    rectangle.style.opacity = isVolumeRectangleVisible ? '1' : '0'; // Показываем или скрываем прямоугольник

    // Остановка распространения события, чтобы не скрывать сразу
    event.stopPropagation();
});

// Обработчик клика по документу
document.addEventListener('click', function(event) {
    const rectangle = document.getElementById('volumeRectangle');
    const whiteStrip = document.getElementById('white-stripe');// Получаем элемент белой полоски
    const volumeLevel = document.getElementById('volumeLevel');

    // Проверяем, был ли клик по прямоугольнику или белой полоске
    if (event.target !== rectangle && event.target !== whiteStrip && event.target !== volumeLevel) {
        // Скрытие прямоугольника при клике в любое место страницы
        if (isVolumeRectangleVisible) {
            rectangle.style.opacity = '0';
            isVolumeRectangleVisible = false; // Обновляем состояние
        }
    }
});









const slider = document.getElementById('slider');
const volumeLevel = document.getElementById('volumeLevel');
const volumeRectangle = document.getElementById('volumeRectangle');
const whiteStripe = document.querySelector('.white-stripe');
const lvlStrip = document.querySelector('.lvl-strip'); // Объект для изменения роста

let isDragging = false;
let sliderPosition = 0; // Начальная позиция ползунка


volumeRectangle.addEventListener('mousedown', () => {
    isDragging = true;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const rect = volumeRectangle.getBoundingClientRect();
        const stripeTop = rect.top + 0.09 * rect.height;
        const stripeBottom = rect.top + 0.59 * rect.height;

        let y = e.clientY;
        y = Math.max(stripeTop, Math.min(y, stripeBottom));

        // Устанавливаем новую позицию ползунка
        slider.style.top = `${y - rect.top}px`;

        // Вычисляем уровень громкости
        const volume = Math.round(((stripeBottom - y) / (stripeBottom - stripeTop)) * 100);
        volumeLevel.innerText = `${volume}%`;

        // Получаем высоту ползунка
        const sliderHeight = slider.offsetHeight;

        // Меняем высоту .lvl-strip в зависимости от уровня громкости
        lvlStrip.style.height = `${volume * (stripeBottom - stripeTop) / 100 + sliderHeight-5}px`;
    }
});

// Обработчик клика по полоске
volumeRectangle.addEventListener('click', (e) => {
    const rect = volumeRectangle.getBoundingClientRect();
    const stripeTop = rect.top + 0.09 * rect.height;
    const stripeBottom = rect.top + 0.59 * rect.height;

    let y = e.clientY;
    y = Math.max(stripeTop, Math.min(y, stripeBottom));

    sliderPosition = y - rect.top;
    slider.style.top = `${sliderPosition}px`;

    const volume = Math.round(((stripeBottom - y) / (stripeBottom - stripeTop)) * 100);
    volumeLevel.innerText = `${volume}%`;

    // Получаем высоту ползунка
    const sliderHeight = slider.offsetHeight;

    // Обновляем высоту .lvl-strip в зависимости от уровня громкости
    lvlStrip.style.height = `${volume * (stripeBottom - stripeTop) / 100 + sliderHeight-5}px`;
});



const progressButton = document.querySelector('.soundtrack_button');
const progressBar = document.querySelector('.soundtrack_progressbar');
const soundtrack = document.querySelector('.soundtrack');

let dragging = false;
let currentLeft = 0; // Позиция кнопки
let buttonWidth = progressButton.offsetWidth; // Ширина кнопки
let initialMouseX = 0; // Начальная позиция мыши

// Функция для инициализации
function initializeDragging() {
    progressButton.addEventListener('mousedown', (e) => {
        dragging = true;
        initialMouseX = e.clientX; // Сохраняем начальную позицию мыши
        currentLeft = progressButton.offsetLeft; // Устанавливаем текущее положение кнопки
        document.body.style.cursor = 'grabbing'; // Устанавливаем курсор
    });

    document.addEventListener('mouseup', () => {
        dragging = false;
        document.body.style.cursor = 'default'; // Возвращаем стандартный курсор
    });

    document.addEventListener('mousemove', (e) => {
        if (dragging) {
            const boundingBox = soundtrack.getBoundingClientRect();
            const minLeft = 0; // Минимальная позиция
            const maxLeft = boundingBox.width - buttonWidth - 26; // Максимальная позиция

            // Вычисляем новое положение кнопки
            // Изменяем смещение с учетом начального положения
            let deltaX = e.clientX - initialMouseX;
            let newLeft = currentLeft + deltaX;

            // Ограничиваем новое положение кнопки
            newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));

            // Устанавливаем новую позицию кнопки
            updatePosition(newLeft); // Передаём новое значение в updatePosition
        }
    });
}

// Функция для обновления позиции кнопки и прогресс-бара
function updatePosition(newLeft) {
    requestAnimationFrame(() => {
        progressButton.style.left = newLeft + 'px';
        progressBar.style.width = newLeft - 3 + (buttonWidth / 2) + 'px';
    });
}

// Инициализация
initializeDragging();



