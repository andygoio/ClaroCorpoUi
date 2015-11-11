if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        $("#activationEquipment/SIM").validationEngine();
       
        }

        $('.switchYesNo').click(function() {
           if($('#sim').is(':checked')) {
              $( '.switch-imei-equipo' ).hide(); 
              $('.switch-numero-sim').animate({height: "toggle", opacity: "toggle"}, "slow");
            }
            else{
              $('.switch-numero-sim').hide();                
              $('.switch-imei-equipo').animate({height: "toggle", opacity: "toggle"}, "slow");
            }
           
        });