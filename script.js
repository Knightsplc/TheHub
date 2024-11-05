const poppyCount = 100,
      winH = window.innerHeight,
      winW = window.innerWidth;

function generatePoppy(index) {
  const poppy = document.createElement('div'),
    randomScale = (index * 0.008) + 0.2,
    randomRotate = Math.floor(Math.random() * 360),
    randomLeft = Math.floor(Math.random() * (winW - 180)) + 40,
    randomTop = Math.floor(Math.random() * (winH - 180)) + 40;
  poppy.classList.add('poppy');
  poppy.dataset.year = 1919 + index;
  poppy.style.transform = 'scale(' + randomScale + ') rotate(' + randomRotate + 'deg)';
  poppy.style.left = randomLeft + 'px';
  poppy.style.top = randomTop + 'px';
  document.body.appendChild(poppy);
}

var i = 0;
var timer = setInterval(function() {
  if (i >= poppyCount) {
    clearInterval(timer);
    return;
  }
  generatePoppy(i);
  i++;
}, 100);