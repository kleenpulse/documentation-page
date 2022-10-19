
const body = document.querySelector("body");
const toggled = document.getElementById("toggle");
toggled.onclick = function () {
    body.classList.toggle("light");
    toggled.classList.toggle("active");
    if(body.classList.contains('light')){
        localStorage.setItem('theme', 'light')
    }else{
        localStorage.removeItem('theme')
    }
};
let savedTheme = localStorage.getItem('theme')
if(savedTheme){
    toggled.click()

}
const hiddenEl = document.querySelectorAll('.hidden')
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else { entry.target.classList.remove('show') }
    })
})
hiddenEl.forEach((el) => observer.observe(el))