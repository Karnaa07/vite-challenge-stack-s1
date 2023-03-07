window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('.arrow-up').classList.add('show');
  } else {
    document.querySelector('.arrow-up').classList.remove('show');
  }
}

document.querySelector('.arrow-up').addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});