  var timer;
  var aud;

  function settimer(){
    if (document.getElementById('aud1').checked) {
       aud = document.getElementById('file1');
  }else if(document.getElementById('aud2').checked) {
   aud = document.getElementById('file2');
  }else if (document.getElementById('aud3').checked){
   aud = document.getElementById('file3');
  }
  else console.log('nothing checked');
    hour = document.getElementById('h').value || 0;
    minute = document.getElementById('m').value || 0;
    sec = document.getElementById('s').value || 0;
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

  function setalarm(){
        if (document.getElementById('aud4').checked) {
     aud = document.getElementById('file1');
  }else if(document.getElementById('aud5').checked) {
   aud = document.getElementById('file2');
  }else if (document.getElementById('aud6').checked){
   aud = document.getElementById('file3');
  }
    d = new Date();
    console.log(d);
    currentH = d.getHours();
    console.log(currentH);
    currentM = d.getMinutes();
    console.log(currentM);
    alarmH = document.getElementById('hour').value;
    alarmM = document.getElementById('minute').value;
    destH = (alarmH - currentH) * 3600000;
    destM = (alarmM - currentM) * 60000;
    alarmTime = destH + destM;
    console.log(alarmTime);

    timer = setTimeout(function(){aud.play();}, alarmTime);
  };

function snooze(){
  timer = setTimeout(function(){aud.play();}, 300000 );
};