
let background = document.getElementById('background');
let left_image = document.getElementById('left_image');
let middle_image = document.getElementById('middle_image');
let right_image = document.getElementById('right_image');
let header =    document.querySelector('header');

window.addEventListener('scroll', myFunction);

function myFunction() {
    let value = window.scrollY;

    if (value < 930) {
        background.style.left = value * 0.25 + 'px';
        left_image.style.left = -value * 0.6 + 'px';
        middle_image.style.top = value * 0.5 + 'px';
        right_image.style.left = value * 0.8 + 'px';
        header.style.top = value * 0.5 + 'px';
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        /*
        else {
            entry.target.classList.remove('show')
        } */
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

const dateInput = document.getElementById('date');

// ✅ Using UTC (universal coordinated time)
dateInput.value = new Date().toISOString().split('T')[0];

console.log(new Date().toISOString().split('T')[0]);