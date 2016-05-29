  var timer;
  var aud;

  function settimer(){
    if (document.getElementById('aud1').checked) {
      var aud = document.getElementById('file1');
  }else if(document.getElementById('aud2').checked) {
    var aud = document.getElementById('file2');
  }else if (document.getElementById('aud3').checked){
    var aud = document.getElementById('file3');
  }
  else console.log('nothing checked');


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
