var button = document.getElementById ('button');
var nav = document.getElementById('nav');


button.addEventListener ('click', function(e) {
nav.classList.toggle('list-items');
    e.preventDefault();
});