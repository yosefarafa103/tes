AOS.init();
const tl = gsap.timeline();
function animation() {
    tl.from('.loader div', {
        x: 0,
        scaleX: 1,
        stagger: 0.2
    })
    tl.to('.loader div', {
        x: 100,
        scaleX: 0,
        duration: 1,
        stagger: 0.1
    })
    tl.to('.loader', {
        display: 'none'
    })
    gsap.to('.spinner', {
        delay: 1,
        opacity: 0
    })
    tl.from(".analics img", {
        y: -25,
        duration: 0.7,
        opacity: 0
    })
}
animation();
// features-item
const allfeatures = document.querySelectorAll('.features-item')
function counter() {
    let count = 0;
    allfeatures.forEach((item, i) => {
        let int1 = setInterval(() => {
            count++
            if (count >= item.dataset.score) {
                clearInterval(int1)
            }
            item.textContent = count + "K+"
        }, item.dataset.score / 100);

    })
}
const section = document.querySelector('#page4')
document.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        document.querySelector('.header').classList.add('scrolled')
    } else {
        document.querySelector('.header').classList.remove('scrolled')
    }
    if (window.scrollY <= section.offsetTop) {
        return counter()
    }
})
// swiper 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
    },
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
// 
document.querySelector('.home-links').addEventListener('click', () => {
    document.querySelector('.home-links').classList.toggle('active')
})
const bars = document.querySelector('.bars')
const fixedSide = document.querySelector('.fixed-side')
const clos = document.querySelector('.close')
const mod = document.querySelector('.modal')
bars.addEventListener('click', () => {
    fixedSide.classList.remove('-left-[100%]')
    fixedSide.classList.add('!left-0')
    document.querySelector('.modal').classList.remove("hide")
})
clos.addEventListener('click', () => {
    fixedSide.classList.remove('!left-0')
    fixedSide.classList.add('!-left-[100%]')
    document.querySelector('.modal').classList.add("hide")
})
mod.addEventListener('click', () => {
    fixedSide.classList.remove('!left-0')
    fixedSide.classList.add('!-left-[100%]')
    mod.classList.add("hide")
})