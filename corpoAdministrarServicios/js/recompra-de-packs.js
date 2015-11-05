$(document).ready(function() {
	//Horizontal Tab
	$('#parentHorizontalTab').easyResponsiveTabs({
		type: 'default',
		width: 'auto',
		fit: true,
		tabidentify: 'hor_1',
		activate: function(event) {
			var $tab = $(this);
			var $info = $('#nested-tabInfo');
			var $name = $('span', $info);
			$name.text($tab.text());
			$info.show();
		}
	});

	// Child Tab
	$('#ChildVerticalTab_1').easyResponsiveTabs({
		type: 'vertical',
		width: 'auto',
		fit: true,
		tabidentify: 'ver_1',
		activetab_bg: '#fff',
		inactive_bg: '#F5F5F5',
		active_border_color: '#c1c1c1',
		active_content_border_color: '#5AB1D0'
	});

	//Vertical Tab
	$('#parentVerticalTab').easyResponsiveTabs({
		type: 'vertical',
		width: 'auto',
		fit: true,
		closed: 'accordion',
		tabidentify: 'hor_1',
		activate: function(event) {
			var $tab = $(this);
			var $info = $('#nested-tabInfo2');
			var $name = $('span', $info);
			$name.text($tab.text());
			$info.show();
		}
	});
    
    
// (*** Select2 ***)
    $(".item-Amount").select2({
        placeholder: "Ingresar número..."
    });

	$(".js-example-placeholder-multiple").select2({
	  placeholder: "Seleccione el/los servicios..."
	});
// /(*** Select2 ***)
    
});

// (*** Waves ***)
Waves.displayEffect();
// /(*** Waves ***)



// (*** Amaran ***)
function showNotificationAmaran(msg, targetId, theme) {
	$.amaran({
		content: {
			targetIdWidth: '5em',
			targetIdHeight: '5em',
			bgcolor: '#8e44ad',
			color: '#fff',
			message: msg
		},
		theme: theme,
		position: 'bottom right',
		closeButton: false,
		delay: 7000999,
		cssanimationIn: 'fadeIn',
		cssanimationOut: 'fadeOut',
		targetId: targetId
	});
}
// /(*** Amaran ***)

// (*** Controles de Angular ***)
var app = angular.module("PacksPurchaseApp", []);

app.controller("PacksPurchaseCtrl", function($scope) {

	// Item List Arrays
	$scope.items = [];

	// Agrega Item a la lista
	$scope.addItem = function() {
		$.amaran.close();
		if ($scope.itemAmount && $scope.itemAvailableBehavior) {

			$scope.items.push({
				amount: $scope.itemAmount,
				currentBehavior: "$5 por día",
				availableBehavior: $scope.itemAvailableBehavior
			});

//            $("#item-Amount").select2('data', {});
//            $("#item-Available-Behavior").select2('data', {});
            
			if ($scope.items) {
				$("#packsPurchaseTableContainer").removeClass("hide-packs-purchase-table-container");
				$("#packsPurchaseButtonsContainer").removeClass("hide-packs-purchase-buttons-container");
				$("#corpo-info-container").removeClass("corpo-info-container-resize");
			}
		} else {
			showNotificationAmaran('Debe seleccionar una Línea y/o un Comportamiento.', '#error-container-packs-purchase-selection', 'errorMessage2');
		}
	};

	// Borra item de la lista Unchecked
	$scope.deleteItem = function(index) {
		$scope.items.splice(index, 1);

		if ($scope.items.length == 0) {
			$("#packsPurchaseTableContainer").addClass("hide-packs-purchase-table-container");
			$("#packsPurchaseButtonsContainer").addClass("hide-packs-purchase-buttons-container");
			$("#corpo-info-container").addClass("corpo-info-container-resize");
		}
	};

	$scope.selectedBehaviorSubmit = function() {
		//        showNotificationAmaran('','#error-success-container-packs-purchase-table','errorMessageTable');
		showNotificationAmaran('', '#error-success-container-packs-purchase-table', 'successMessageTable');
	}

});
// /(*** Controles de Angular ***)