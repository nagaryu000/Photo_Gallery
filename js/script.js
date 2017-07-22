var album = [
    {src: 'img/painting_1.jpg', msg: 'テスト'},
    {src: 'img/painting_2.jpeg', msg: 'テスト'},
    {src: 'img/painting_3.jpeg', msg: 'テスト'},
    {src: 'img/painting_4.jpg', msg: 'テスト'},
    {src: 'img/painting_5.jpeg', msg: 'テスト'}
];

var mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

var mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

var mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

var thumbFlame = document.querySelector('#gallery .thumb');
for (var i = 0; i < album.length; i ++) {
    var thumbImage = document.createElement('img');
    thumbImage.setAttribute('src', album[i].src);
    thumbImage.setAttribute('alt', album[i].msg);
    thumbFlame.insertBefore(thumbImage, null);

}