var timeleft = 10;
var timee = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(timee);
      window.location.href = 'https://dai-re.github.io/';
  } else {
    document.getElementById("back").innerHTML = timeleft + " seconds Back to Home Page";
  }
  timeleft -= 1;
}, 1000);
