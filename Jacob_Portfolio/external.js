<script>
      function showAlert () {
        var myText = "xD YOLO SWAG";
        alert (myText);
      }

       function updateTime() { 

        // add leading zero's to minutes and seconds
  if (minutes < 10) { 
    minutes = '0' + minutes;
  }
  if (seconds < 10) { 
    seconds = '0' + seconds;
  }       

  // get time of day (am or pm) 
  if (hours >= 12 && hours < 24) { 
    var timeOfDay = 'pm';
  }
  else { 
    var timeOfDay = 'am'; 
  }
        
  // convert hours from 24-hour time to 12-hour time
  if (hours > 12) { 
    hours = hours - 12;
  }

    // get all parts of the current time
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // splice them together into a character string named "currentTime"
    var currentTime = hours + ':' + minutes + ':' + seconds + ' ' + timeOfDay;  
    
    // get the clock div 
    var myClock = document.getElementById('clock');
    
    // write the currentTime string to the clock div
    myClock.innerHTML = currentTime;
  }
  </script>
`