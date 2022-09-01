let porcetageEl=document.querySelector('.numb');


let i=0;
function my(){
    if(i==100){
        clearTimeout()
    }
    else{
        i++;
        porcetageEl.innerHTML=`${i} %`;
    }
    setTimeout(my,37);
}
my();