

const array = [ "./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.jpg","./images/5.jpg",
"./images/Debbie1.jpg","./images/Debbie2.jpg","./images/Debbie3.jpg","./images/Debbie4.jpg"];

const dots = document.getElementsByClassName("dot");
const arrayOfDots = Array.from(dots);
console.log(arrayOfDots);
const imageTag = document.getElementById("image");
const forward = document.getElementById("forward");
const backward = document.getElementById("backward");

backward.addEventListener("click",back);
forward.addEventListener("click",forw);


let number = 0;


function back (){

    // let dotElements = arrayOfDots[number];
    //     dotElements.style.backgroundColor= "yellow"


    const lengthOfArray = array.length;
    if(number ===0){
        number = lengthOfArray-1;
        let url = array[number];
        imageTag.src = url;
        let dotElements = arrayOfDots[number];
        dotElements.focus()
        //dotElements.style.backgroundColor= "red"

        
    }else {
       number--;
       let url = array[number];
        imageTag.src = url;
        let dotElements = arrayOfDots[number];
        dotElements.focus()
        //dotElements.style.backgroundColor= "red"


    }



}

setInterval(() => {
    rotate();
}, 4000);


function forw (){

    let dotElements = arrayOfDots[number];
        dotElements.style.backgroundColor= "yellow"


    const lengthOfArray = array.length;
    if(number ===8){
        number = 0;
        let url = array[number];
        imageTag.src = url;
        let dotElements = arrayOfDots[number];
        
        dotElements.focus()
        
    }else {
       number++;
       let url = array[number];
        imageTag.src = url;
        let dotElements = arrayOfDots[number];
        
        dotElements.focus()


    }


}

function rotate(){

    let dotElements = arrayOfDots[number];
        

       if(number===8){
           number =-1;
       }

        number++;
       let url = array[number];
        imageTag.src = url;
        dotElements = arrayOfDots[number];
        
        dotElements.focus()



} 

