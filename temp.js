let mainTempleBox =document.querySelector('.container')
let ar_ti = document.querySelector('.puja-thali');
let arti_bhajan = document.querySelector('#arti-bhajan');
let clickShankh = document.querySelector('.shankh-icon');
let sound_shankh = document.querySelector('#shankh');
let bell_sound = document.querySelector('#bell');
let bell = document.querySelector('.bell');
let bell_fade = document.querySelector('#bell-icon');
let bhjanLyrics= document.querySelector('.arti-lyrics');
let templeDoor= document.querySelector('.temple-door');
let templeDoorRight=document.querySelector('.t-door2');
let templeDoorLeft=document.querySelector('.t-door1');

//  temple door open and close event use start


templeDoor.addEventListener('click',function(){
    this.style.zIndex='-1';
    templeDoorLeft.style='left:-230px';
    templeDoorRight.style='right:-230px';
    
})

//    extra door closing js on bell click 
// bell.addEventListener('click',function(){
//     setTimeout(function(){  
//         templeDoor.style.zIndex='99'
//        templeDoorLeft.style='left:0'
//        templeDoorRight.style='right:0'
//        arti_bhajan.currentTime=0;
//        arti_bhajan.pause();
//        ar_ti.classList.remove('arti');
//        bhjanLyrics.style.display='none';
   
//        },2000)
     
// })

//   door close js 

mainTempleBox.addEventListener('mouseleave',function(){
    setTimeout(function(){  
     templeDoor.style.zIndex='99'
    templeDoorLeft.style='left:0'
    templeDoorRight.style='right:0'
    arti_bhajan.currentTime=0;
    arti_bhajan.pause();
    ar_ti.classList.remove('arti');
   // bhjanLyrics.style.display='none';

    },10000)
})

//  temple main door event js  end 

// temple arti thali , bhajan  start js

ar_ti.addEventListener('click', function () {
    let a = 0;
    if (arti_bhajan.paused) {
        this.classList.toggle('arti');
        arti_bhajan.play();
        console.log(arti_bhajan.duration /60)
    }
    else {
        arti_bhajan.pause();
        this.classList.toggle('arti');
        arti_bhajan.currentTime=0;


    }
})
ar_ti.addEventListener('click',function(){
    setTimeout(function(){
        this.classList.toggle('arti');

    },2000)
})
ar_ti.addEventListener('click',function(){
    setTimeout(function(){
        bhjanLyrics.toggle('artilyrics');


    },20000)
})


// click.addEventListener('mousedown',function(){
// // arti_bhajan.preload();
// arti_bhajan.play();


// })
// click.addEventListener('mouseup',function(){
// // arti_bhajan.preload();
// // arti_bhajan.currentTime=0;
// arti_bhajan.pause();
// arti_bhajan.stopAll();


// })

// for shakha event 

clickShankh.addEventListener('mouseover',function(){
    // arti_bhajan.preload();
    sound_shankh.play();
    
    
    })
    clickShankh.addEventListener('mouseleave',function(){
sound_shankh.currentTime=0;
   sound_shankh.pause();
    
    
    })

    function belloff(){
        bell_fade.classList.remove('fade')
    }

    bell.addEventListener('click',function(){
        let bell = 0;
       if(bell_sound.paused){
        bell_sound.play();
        bell_fade.classList.add('fade')
        setTimeout(belloff,5000)
       } 
       else{
        bell_sound.currentTime=0;
        

       }
    })
    

    //js flower in js 
    let phool = document.querySelectorAll('.flower');
    let phool_thali = document.querySelector('.flower-thali')
    let phool1= document.querySelector('.flower1')
    let phool2= document.querySelector('.flower2')
    let phool3= document.querySelector('.flower3')
    let phool4= document.querySelector('.flower4')
    let phool5= document.querySelector('.flower5')
    let phool6= document.querySelector('.flower6')
    let phool7= document.querySelector('.flower7')
    let phool8= document.querySelector('.flower8')
    let phool9= document.querySelector('.flower9')
    let phool10= document.querySelector('.flower10')
    
// for( var f=0;f<phool.length;f++){
    phool_thali.addEventListener('click',function(){
phool1.classList.toggle('anim1')  ;
phool2.classList.toggle('anim2')  ;
phool3.classList.toggle('anim3')  ;
phool4.classList.toggle('anim4')  ;
phool5.classList.toggle('anim5')  ;
phool6.classList.toggle('anim6')  ;
phool7.classList.toggle('anim7')  ;
phool8.classList.toggle('anim8')  ;
phool9.classList.toggle('anim9')  ;
phool10.classList.toggle('anim10')  ;
  })
    
// }




