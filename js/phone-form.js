 $(function() {
     
    ///////////////////////////////////
    // FIRST CREATING TELEPHONE FORM INPUT //
    ///////////////////////////////////
    
    //
    // adding phone div to the input
    $('<div>',{
        'class' :'cc-mobile-num__wrap'
         // appending the created element to 'rahasi-form':
    }).appendTo('.rahasi-form');
    // Add phone field to the form
    $('<input>', {
        'type' : 'tel',
        'name' : 'msisdn',
        'id'   : 'rahasi-phone',
        'class': 'rahasi-phone' 
    // appending the created element t '.cc-mobile-num__wrap':
    }).appendTo('.cc-mobile-num__wrap');

    $('<span>',{
        'class' : 'mobile',
        'aria-hidden' : 'true'
       // appending the created element t '.cc-mobile-num__wrap':
    }).appendTo('.cc-mobile-num__wrap');


    //////////////////////////////////////////
    // NOW LISTEN TO THE EVENTS IN THE FORM //
    //////////////////////////////////////////
    
        /** Only allow numbers in the phone-num field */
       $(".rahasi-phone").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
      });

      var validatePhone = function() {
          // Get the input phone number
         var phoneNumber = $('.rahasi-phone').val();
          
         // Get the first 3 phone numeric
         var phoneType   = phoneNumber.substr(0,3);

          // First check if the user provided country code
          if((phoneType == '+25' || phoneType=='250') && phoneNumber.length>4)
          {
            phoneType    = phoneNumber.substr(3,3);
          }
          // check the length of the phone 
          if (phoneType.length<3) 
            {

            $('.mobile').removeClass('tigo');
            $('.mobile').removeClass('mtn');
            $('.mobile').removeClass('airtel');
              return;
            };

        switch(phoneType){
          case  '072':
            // if the expiry is valid add the identified class
            $('.mobile').addClass('tigo');
            break;
          case  '078':
            $('.mobile').addClass('mtn');
            break;
          case  '073':
            $('.mobile').addClass('airtel');
            break;
          default:
            break;
        }
      };
 
   $('.rahasi-phone').on('change paste keyup', function() 
   {
      console.log('okay I get it');
      validatePhone();
   });

});