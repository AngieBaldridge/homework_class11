// MOUSE EVENTS ==========================================

// WHEN the user clicks the #trigger
$('#trigger').on('click', function() {
  // Fade in .circle-two
  $(".circle-two").fadeIn();
});

// EVENT OBJECT AND THIS =================================

// WHEN the user clicks the anchor
$('a').on('click', function(event) {
  // Toggle the ghost-effect class
  event.preventDefault();
  $("this").toggleClass('ghost-effect');
});



// KEYBOARD EVENTS ==========================================
// When the user lifts a key on the input (hint: keyup event)
$('input').on('keyup', function() {
  // Add the class correct to the input
  $('#email').addClass('correct');
});


// FORM EVENTS ==================================================
// When the user changes the checkbox #remember-me. (Event: change, Selector: the checkbox)
$('#remember-me').on('change', function() {
  // Add the subscribe class to the form element
  $('form').addClass('subscribe');
});

// When the user submits the form. (Event: submit, Selector: the form)
$('form').on('submit', function(event) {
  event.preventDefault();
  // a) Fade out the form
  $('form').fadeOut();
  // b) Fade in the h3
  $('h3').text('I exist!');
});

// DOCUMENT EVENTS ==================================================
// When the browser window is resized (Hint: the selector is provided here)
$(window).on('resize', function () {
  // Add the .party class to the body
$('body').toggleClass('party');
});
