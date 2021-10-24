const body = document.body;
const day_theme_button = document.getElementById('day');
const night_theme_button = document.getElementById('night');

//Change the class of the body element
function changePageTheme(theme) {
    body.classList = theme;
}

day_theme_button.addEventListener('click', function(){changePageTheme('day')});
night_theme_button.addEventListener('click', function(){changePageTheme('night')});