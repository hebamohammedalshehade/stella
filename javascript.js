let menuToggle = document.querySelector('.menuToggle');
let sidebar = document.querySelector('.sidebar');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}
let menulist = document.querySelectorAll('.menulist li');

function activeLink() {
    menulist.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

menulist.forEach((item) =>
    item.addEventListener('click', activeLink)
);

var btnsider = document.querySelector('.toggle');
var sider = document.querySelector('.sidebar');
btnsider.onclick = function () {
    sider.classList.toggle('show');
    btnsider.classList.toggle('active');
}


let marker = document.querySelector('#indicator');
let nav = document.querySelector('nav');
let item = document.querySelectorAll('nav a');

nav.onclick = function () {
    marker.classList.toggle('change');
}
function indicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
    marker.style.display = "block";
    marker.style.filter = 'hue-rotate(' + Math.random() * 360 + 'deg)'
}
item.forEach(link => {
    link.addEventListener("click", (e) => {
        indicator(e.target);
    })
})

function addActiveClass() {
    item.forEach((i) =>
        i.classList.remove('active'));
    this.classList.add('active');
}
item.forEach((i) =>
    i.addEventListener('click', addActiveClass));

// main
let images = [
    'url("colors/1.png")',
    'url("colors/2.png")',
    'url("colors/3.png")',
    'url("colors/4.png")',
    'url("colors/5.png")',
    'url("colors/6.png")',
    'url("colors/7.png")',
    'url("colors/8.png")',
    'url("colors/9.png")',
    'url("colors/10.png")',
    'url("colors/11.png")',
    'url("colors/12.png")',
    'url("colors/13.png")',
    'url("colors/14.png")',
    'url("colors/15.png")',
    'url("colors/16.png")'
];
let main = document.querySelector('main');
main.onclick = function (e) {
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;

    let splash = document.createElement('h5');
    splash.style.left = x + 'px';
    splash.style.top = y + 'px';
    let bg = images[Math.floor(Math.random() * 
        images.length)];
        splash.style.backgroundImage = bg;
    this.appendChild(splash);

    setTimeout(() => {
        splash.remove()
    },4000)
}
  
  const elements = document.querySelectorAll('.taxt');

  elements.forEach(element => {
      element.innerHTML = element.innerText.split('').map((letter, i) =>
          `<span style="transition-delay: ${i * 40}ms; filter: hue-rotate(${i * 30}deg)">${letter}</span>`
      ).join('');
  });

  const label = document.querySelectorAll('form label');


  label.forEach(label => {
    label.innerHTML = label.innerText.split('').map((letters, i) =>
          `<span style="transition-delay: ${i * 40}ms; filter: hue-rotate(${i * 30}deg)">${letters}</span>`).join('');
  });

  let prev = document.querySelector('.prev');
  let next = document.querySelector('.next');
  let container = document.querySelector('.container');


  prev.addEventListener('click', function () {
      container.style = ` transform: translateX(-300px)`;
  })
  next.addEventListener('click', function () {
      container.style = ` transform: translateX(100px)`;
  })



