var num = 1;
const DarkMode = () => {
    const body = document.getElementsByTagName('body')[0];
    const search = document.getElementsByClassName('search')[0];
    const card = document.getElementsByClassName('card')[0];
    const stats = document.getElementsByClassName('stats')[0];
    const modename = document.getElementById('mode-name');
    const modeimage = document.getElementById('mode-image');
    body.classList.toggle('dark-body');
    search.classList.toggle('dark-content');
    card.classList.toggle('dark-content');
    stats.classList.toggle('dark-body');
    if(num == 1) {
        modename.innerHTML = 'LIGHT';
        modeimage.src = './assets/icon-sun.svg';
        num = 2;
    }
    else {
        modename.innerHTML = 'DARK';
        modeimage.src = './assets/icon-moon.svg';
        num = 1;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const mode = document.getElementById("mode");
    mode.addEventListener("click", DarkMode);
});