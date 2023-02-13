document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("video");
    const startTime = 222.5; // Specify the start time in seconds
    const stopTime = 224; // Specify the stop time in seconds
 
    function startVideo() {
      video.style.display = "block";
      video.currentTime = startTime;
      video.play();
    }
       
    video.ontimeupdate = function () {  
      if (video.currentTime >= stopTime) {
        video.pause();
        video.style.display = "none";
        // document.getElementById("text-overlay").style.display = "none";
      } 
    };
    startVideo();    
    const word = document.querySelector("#word");
    const letters = word.querySelectorAll(".letter");
    letters.forEach((letter, i) => {  
      setTimeout(() => {                 
        letter.style.animation = `pop 1s ease-out ${i * 0.2 + 0.2}s forwards`;
      }, 50 * i);
    });
  });
  