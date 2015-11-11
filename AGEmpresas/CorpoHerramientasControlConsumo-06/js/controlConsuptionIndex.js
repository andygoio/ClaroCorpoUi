
// (*** Chosen ***)
    $(function() {
        $('.chosen-select').chosen();
        $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
    });
// /(*** Chosen ***)



	  $('#administrativeButton').click(function() {
	      $('.autoStopPopBody').animate({height: "toggle", opacity: "toggle"}, "slow");
	});


	$(document).ready(function() {
				toggleAutoStop();

			});
			
			function toggleAutoStop(){
				$("#autoStopBg").toggle();
			}

			function changeAmount(){
				$("#changeAmountResult").show("drop", 200);
				$("#confirmChangeAmount").hide();
				$("#autoStopError").hide();
			}

			function toConfirm(tipoCambio){
				cambioNIMSelectedLine = $("#lineas").val();
				cambioNIMSelectedCity = $("#localidad").val();
				if(cambioNIMSelectedLine != "" && cambioNIMSelectedCity != ""){
					$("#confirmChangeAmount").show("drop", 200);
					$("#autoStopError").hide();
					$("#autoStopButtons").hide();
				}else{
					$("#autoStopError").show();
				}
			}

			function resetFunctionality(){
				$(".sliderContainer").hide();
				$(".triangleContainerMontoMin").hide();
				$(".triangleContainerMontoMax").hide();
				$("#autoStopButtons").hide();
				$("#autoStopError").hide();
				$("#confirmChangeAmount").hide();
			}
			
			function changeAmountFrm(frmName){
				switch(frmName){
					case 'autoStopButtons':
					  $("#autoStopButtons").show("drop",200);
					  break;
					default:
						$("#autoStopButtons").hide("drop",200);
				}
			}
			
			function editAmount(){
				$(".sliderContainer").show("drop",200);
				$(".triangleContainerMontoMin").show("drop",200);
				$(".triangleContainerMontoMax").show("drop",200);
				$("#autoStopButtons").show("drop",200);
				$("#autoStopError").hide();
				$("#confirmChangeAmount").hide();
			}

			$(function() {
			$( "#slider-range-min" ).slider({
			  range: "min",
			  value: 110,
			  min: 90,
			  max: 190,
			  slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.value );
			  }
			});
			$( "#amount" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) );
		  });


