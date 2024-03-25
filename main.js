onload = () =>{
    document.body.classList.remove("container");
};

var audio = document.getElementById("myAudio");

    function togglePlay() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }