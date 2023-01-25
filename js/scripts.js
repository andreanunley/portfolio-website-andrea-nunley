
console.log("Hi! I'm glad you're here.")

$('nav ul li a').on('click', function(){
$('nav ul li a.active').removeClass('active');
$(this).addClass('active');
});

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }
  
