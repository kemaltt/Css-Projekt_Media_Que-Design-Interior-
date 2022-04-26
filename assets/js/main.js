const name = document.getElementById('name')
const email = document.getElementById('email')
const text = document.getElementById('text')
const slideNav = document.getElementById('slide-in-nav')
const tabNav = document.getElementById('tab-nav')

function formSubmit() {

    console.log(name.value);
    console.log(email.value);
    console.log(text.value);
    name.value = ''
    email.value = ''
    text.value = ''
}

const showNav = () => {
    slideNav.style.left = '70%';
    slideNav.style.right = 0;
    tabNav.style.visibility = 'hidden'
}

const closeNav = () => {
    slideNav.style.left = '100%'
    slideNav.style.right = '-100%'
    tabNav.style.visibility = 'visible'
}