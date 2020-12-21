debugger;
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening, Class!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon, Class!';
  } else if (hourNow >= 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Something went wrong!';
  }

  var nameS = prompt("What's your name?");
  prompt("How old are you?");
  
  confirm("Are you sure?") ;

  document.write('<h3>' + greeting + ' ' + nameS +'</h3>');

  flatImagePrinting();

  function flatImagePrinting() {
    var count = prompt("How many flat you want? (ex: 4)");
  
    var flat = prompt("Please choose a flat by writing the word 'Flat' or 'Home' to see flat image.");
  
    while(flat != "Flat" && flat != "Home") {
      flat = prompt("Please choose a flat by writing the word 'Flat' or 'Home' to see flat image.");
    }
  
    if(flat == "Flat" || flat == "Home") {
      for(var i = 0; i < parseInt(count); i++) {
        document.write('<img src="../images/flat.jpg" alt="flat!" />');
      }
    }
  }