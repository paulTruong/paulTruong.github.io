$(document).ready(function($) {
  var emptyMessage = 'This field is mandatory'

  function isEmptyOrNull(string) {
    if (string === null || string === "") {
      return true;
    }
    return false;
  }

  function validateEmail(emailString) {

    var emailRegEx = /@/;

    if (isEmptyOrNull(emailString)) {
      $('.form__email').append('<div class="error">' + emptyMessage + '</div>');
      return true;
    } else if (!emailRegEx.test(emailString)) { // Only check for valid email if it's not null
      // add the actual error message under our input
      $('.form__email').append('<div class="error">There&apos;s no @ symbol. Are you sure that&apos;s an email address? </div>');
      return true;
    }
  }

  $('.contact__form').on('submit', function(event) {
    $('.error').remove();
    event.preventDefault();
    var digitRegEx = /\d/;
    var isError = false;
    var name = $('input[name=name]').val()
    var email = $('input[name=email]').val()
    var msg = $('textarea[name=msg]').val()

    if (isEmptyOrNull(name)) {
      $('.form__name').append('<div class="error">' + emptyMessage + '</div>');
      isError = true;
    }

    if (isEmptyOrNull(msg)) {
      $('.form__msg').append('<div class="error">' + emptyMessage + '</div>');
      isError = true;
    }
    if (validateEmail(email)) {
      isError = true;
    }
    if (digitRegEx.test(name)) {
      // add the actual error message under our input
      $('.form__name').append('<div class="error">Woops, Can&apos;t have numbers in a name</div>');
      isError = true;
    }

    if (isError) {
      return;
    }
    
    $.ajax({
      url: "https://formspree.io/mrpaultruong@gmail.com",
      type: "POST",
      data: {
        name: name,
        email: email,
        message: msg,
        _subject: 'New message from ' + name
      },
      dataType: "json"
    }).done(function(data) {
      // log data to the console so we can see
      console.log(data);

      if (!data.success) {

      } else {
        $('.contact__form').hide();
        $('.contact__confirm').show();
      }
      // here we will handle errors and validation messages
    });
  })
});