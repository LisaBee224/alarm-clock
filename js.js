  var timer;
  var aud = document.getElementById("aud");
  function settimer(){
    hour = document.getElementById('h').value;
    minute = document.getElementById('m').value;
    sec = document.getElementById('s').value;

    hour = hour * 3600000;
    minute = minute * 60000;
    sec = sec * 1000;
   totalTime = hour+minute+sec;

   timer = setTimeout(function(){aud.play(); }, totalTime);
 };
  function cancel(){
    console.log("stopped");
    clearTimeout(timer);

  };
