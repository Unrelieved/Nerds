var WriteUs = document.querySelector('.js-write-us-popup');
var WriteUsButton = document.querySelector('.js-open-write-us-popup');
var closeWriteUs = document.querySelector('.js-close-write-us-popup');

WriteUsButton.addEventListener('click', function (event) {
    event.preventDefault();

    WriteUs.classList.add('write-us-popup--show');
});

closeWriteUs.addEventListener('click', function () {
    WriteUs.classList.remove('write-us-popup--show');
});

console.log(WriteUs);