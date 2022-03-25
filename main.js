let images = [
    'url(img1.jpg)',
    'url(img2.jpg)',
    'url(img3.jpg)',
    'url(img4.jpg)',
    'url(img5.jpg)',
    'url(img6.jpg)',
    'url(img7.jpg)'
]

function dropAnimation() {
    let section = document.querySelector('section');
    let aylana = document.createElement('span');

    aylana.style.top = innerHeight * Math.random() + 'px';
    aylana.style.left = innerWidth * Math.random() + 'px';

    let size = Math.random() * 200 + 'px';

    aylana.style.width = size;
    aylana.style.height = size;
    aylana.style.backgroundImage = images[Math.floor(Math.random() * images.length)];

    section.appendChild(aylana);

    setTimeout(()=> {
        aylana.remove();
    },6000)
}

setInterval(dropAnimation,50)