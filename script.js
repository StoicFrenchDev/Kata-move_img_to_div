document.addEventListener('DOMContentLoaded', function() {
    const mainImg = document.getElementById('mainImg');
    const imgs = document.querySelectorAll('#menuImg img');

    imgs.forEach(img => {
        img.addEventListener('click', function(){
            mainImg.innerHTML = '<img src="' + img.src + '">';
        });
    });
});