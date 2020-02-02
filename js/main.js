const pics = ["./src/photo_1.jpg","./src/photo_2.jpg","./src/photo_3.jpg","./src/photo_4.jpg"];
var num1 = -1;

//slide1
function slide1(){
  if(num1 === 3){
    num1 = 0;
  }else{
    num1++;
  }
  document.getElementById('slide1_img').src = pics[num1];
}
setInterval(slide1,1000);


//slide2
var num2 = -1
function slide2(){
  if(num2 === 3){
    num2 = 0;
  }else{
    num2++;
  }
  document.getElementById('slide2_img').src = pics[num2];
}
function start(){
  setInterval(slide2,1000);
}

var sliderImages = document.querySelectorAll('.slide'); //画像のdivを配列として取得(読み込みはjQuery表記)
var arrowRight = document.getElementById('arrow-right');
var arrowLeft = document.getElementById('arrow-left');
var current = 0;

function startSlide(){
  sliderImages[0].style.display = 'block';
}

arrowRight.addEventListener('click',function(){
  sliderImages[current].style.display = 'none';
  if(current === sliderImages.length - 1){
        current = -1;
    }
    sliderImages[current + 1].style.display = 'block';
    current++;
});

arrowLeft.addEventListener('click', function() {
    sliderImages[current].style.display = 'none';
    if(current === 0){
        current = sliderImages.length;
    }
    sliderImages[current - 1].style.display = 'block';
    current--;
})

startSlide();
