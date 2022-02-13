

var audio = new Audio();
audio.src ="musics.mp3";
audio.play();
score=0;
document.onkeydown=function(e){
    console.log('keycode :',e.keyCode); 
    if(e.keyCode==38){
        let covid_fighter=document.querySelector('.covid_fighter');
        covid_fighter.classList.add('animateFighter');
        setTimeout(()=>{
            covid_fighter.classList.remove('animateFighter');
        },700)
    }
    
    
}
setInterval(() => {
    let covid_fighter=document.querySelector('.covid_fighter');
     let gameOver=document.querySelector('.gameOver');
     let covid=document.querySelector('.covid');
 
     dx=parseInt(window.getComputedStyle(covid_fighter,null).getPropertyValue('left'));
     dy=parseInt(window.getComputedStyle(covid_fighter,null).getPropertyValue('bottom'));
 
     ox=parseInt(window.getComputedStyle(covid,null).getPropertyValue('left'));
     oy=parseInt(window.getComputedStyle(covid,null).getPropertyValue('bottom'));
 
     offsetX=Math.abs(dx-ox);
     offsetY=Math.abs(dy-oy);
     console.log(offsetX,offsetY);

     if(offsetX<80 && offsetY<80)
     {
         gameOver.style.visibility='visible';
         covid.classList.remove('covidAni');
         audio.pause();
     }
     else if(offsetX<80 && offsetX>40){
       score+=1;
       updateScore(score);
     }
   setTimeout(() => {
    temp_speed=parseFloat(window.getComputedStyle(covid,null).getPropertyValue('animation-duration'));
    new_speed=temp_speed-0.01;
    covid.style.animationDuration=new_speed + 's';

       
   },500);
     
 }, 100);

 function updateScore(score){
     scoreCount.innerHTML='Your Score: '+score;

 }