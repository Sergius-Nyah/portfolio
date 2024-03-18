document.getElementById('theme-switcher').addEventListener('click', function() {
    var body = document.body;
    var icon = document.querySelector('#theme-switcher i');

    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

//set initial state
document.body.classList.add('light-mode');
document.querySelector('#theme-switcher i').classList.add('fa-moon');