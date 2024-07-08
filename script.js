
const navigationIcon = document.querySelector('.navigation-icon');
const navigation = document.getElementById('navigation');
const times = document.getElementById('times');

navigationIcon.addEventListener('click' , function(e) {
    e.preventDefault();
    navigation.classList.toggle('item-position');
    // times.classList.toggle('hidden');
});