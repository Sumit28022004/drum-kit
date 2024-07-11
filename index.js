var numberOfDrumButtons = document.querySelectorAll(".drum").length;

var i = 0;
while( i < numberOfDrumButtons ){
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var buttonInnerHtml = this.innerHTML;
        produceSound(buttonInnerHtml);
        animation(buttonInnerHtml);
    })
    i++;
}


document.addEventListener("keydown",function(event){
    produceSound(event.key);
    animation(event.key);
})

function produceSound(key){
    switch(key){
        case"w":
        var audio = new Audio("tom-1.mp3");
        audio.play();
        break;
        case"a":
        var audio = new Audio("tom-2.mp3");
        audio.play();
        break;
        case"s":
        var audio = new Audio("tom-3.mp3");
        audio.play();
        break;
        case"d":
        var audio = new Audio("tom-4.mp3");
        audio.play();
        break;
        case"j":
        var audio = new Audio("crash.mp3");
        audio.play();
        break;
        case"k":
        var audio = new Audio("kick-bass.mp3");
        audio.play();
        break;
        case"l":
        var audio = new Audio("snare.mp3");
        audio.play();
        break;
        default:
    }
   
}

function animation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}