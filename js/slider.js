const images = [
    'images/pic1.png',
    'images/pic2.png',
    'images/pic3.png',
    'images/pic4.png',
    'images/pic5.png',
    'images/pic6.png',
    'images/pic7.png'

]
let imgIndex = 0
const imgElement = document.getElementById('slider-img')
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0
    }
    const imgUrl = images[imgIndex]
    imgElement.setAttribute('src', imgUrl)
    imgIndex++

}, 1000)