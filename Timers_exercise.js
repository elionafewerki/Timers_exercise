function countDown(time) {
    let timer = setInterval(function(){
        time--;
        if(time <= 0){
            clearInterval(timer);
            console.log('DONE!!');
        }
        else {
            console.log(time);
        }
    },1000)
}

function randomGame(){
    let number;
    let times = 0;
    let timer = setInterval(function(){
        number = Math.random();
        times++
        if(number>.75){
            clearInterval(timer);
            console.log("it took" + times + "tries");
        }
    },1000)
}