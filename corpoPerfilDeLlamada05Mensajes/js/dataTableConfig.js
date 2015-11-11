	var mapBT=[];
	mapBT['CO'] = 'Abono Libre';
	mapBT['CR'] = 'Factura Fija';
	mapBT['PP'] = 'Pre Pago';
	mapBT['LD'] = 'Larga Distancia';
	
	var mapStatus=[];
	mapStatus['A'] = '<i class="fa fa-check glyphicon table-icon-bold-success icon-success"></i><div class="short-text"> Activa</div>';
	mapStatus['S'] = '<i class="fa fa-exclamation glyphicon table-icon-bold-warning icon-warning"></i><div class="short-text"> Suspendida</div>';
	mapStatus['C'] = '<i class="fa fa-ban glyphicon table-icon-size table-icon-bold-danger icon-danger"></i><div class="short-text"> Cancelada</div>';
	var firstCharge=true;
	$(document).ready(function() {
		table =$('#servicesStatusCorpoTable').dataTable({
			
		"fnFooterCallback":function (){
				$('.dataTables_filter input').attr("placeholder", 'Buscar');
			}
			
		,"sAjaxSource" : "${url}"
		,"fnServerData": function ( sSource, aoData, fnCallback ) {
            $.ajax( {
                "dataType": 'json',
                "type": "POST",
                "url": sSource,
                "data": aoData,
                "success": fnCallback
            } );}
		,"serverSide": false 
		,"processing":false 
		,"iDisplayLength": 10
		,"bSort": false
		,"bStateSave": false
		,"aaSorting": [[1,'asc'], [0,'asc']]
		,"aoColumns": [{ "mData": "billNumber",
		 				 "className": "col-xs-6 col-sm-2 col-md-2 col-lg-2 lineRow cursor-pointer"
		 				},
		               { "mData": "user.name",
		               	 "className": "hidden-xs col-sm-3 col-md-3 col-lg-2 cursor-pointer"
		               },
		               { "mData": function (data,type,val){
		               		return mapBT[data.businessType];
		              		},
		              	 "className": "hidden-xs col-sm-3 col-md-3 col-lg-2 cursor-pointer"
		               },
		               { "mData":  function ( data, type, val ) {
	                 		return mapStatus[data.lineStatus.status];						
	                  	},
	                  	"className": "col-xs-5 col-sm-2 col-md-2 col-lg-2 cursor-pointer"
		               },
		               { "mData": function (data,type,val){
			               if(typeof data.simCard != 'undefined' ){
		               		  	return data.simCard.id;
		               		  }else{
		               		  	return '';
		               		  }
		              		},
		               	 "className": "hidden-xs col-sm-3 col-md-3 col-lg-2 cursor-pointer"
		               },
		               { "mData": function (data,type,val){
			               if(typeof data.associatedDevice != 'undefined' ){
		               		  	return data.associatedDevice.id;
		               		  }else{
		               		  	return '';
		               		  }
		              		}, 
		                 "className": "hidden-xs hidden-sm col-md-3 col-lg-2 cursor-pointer"
		               	},
		               { "mData": function (data,type,val){
		               		   if(typeof data.associatedDevice != 'undefined' ){
		               		  	return data.associatedDevice.description;
		               		  }else{
		               		  	return '';
		               		  }
		              		}, 
		               	 "className": "hidden-xs hidden-sm col-md-3 col-lg-2 cursor-pointer"
		                },
		                { "mData": function (data, type, val){
		                if(typeof data.deviceInUse != 'undefined' ){
		               		return data.deviceInUse.id;
		               			}else{
		               		return '';
		               		}},
		               	 "className": "hidden-xs hidden-sm col-md-3 col-lg-2 cursor-pointer"
		               	},
		               { "mData": function (data, type, val){
		                if(typeof data.deviceInUse != 'undefined' ){
		               		return data.deviceInUse.description;
		               			}else{
		               		return '';
		               		}},
		               		"className": "hidden-xs hidden-sm col-md-3 col-lg-2 cursor-pointer"
		               	},
		               { "mData": function (data, type, val){
		               		return '<a class="fa fa-bars off-left  "  data-move="ltr"></a>';
		               },
		               	"className": "col-xs-1 col-sm-2 col-md-2 col-lg-2 text-center actionRow cursor-pointer" },]
		
			,"createdRow":function(row, data, dataIndex){
					$(row).on('click',  function () {
						//var tr = $(this).closest('tr');
						var	api = table.api();
						var rowSelected = api.row( row );
						var tabs=createTabs(rowSelected);
						configOption($(this),tabs, api);
					});		
			}
			,"initComplete": function( settings ) {
				
					var	api = this.api();
					
			}
		    ,"bLengthChange": false
		     ,pagingType:"full_numbers"    
			,language: {
				"info": "_START_ al _END_ [ de _TOTAL_ ] ",
				"emptyTable": "No hay informaci&oacute;n en la tabla",
				"infoEmpty": "0 - 0 de 0",
				"infoFiltered": "(filtrado de un total de _MAX_)",
				"infoThousands": ".",
				"loadingRecords": "Cargando...",
				"processing": "Procesando...",
				"search": '<i class="fa fa-search glyphicon hidden-xs icon-search-style"></i>',
				"oPaginate": {
	            "sNext":    " ",
	            "sPrevious": " ",
	            	"sLast":" ",
	            		"sFirst":" "
			}
			,"zeroRecords": "No hay coincidencias"}		
			,"dom": 'C<"clear">lfrtip'
			,"aoColumnDefs": [
				     			{ "bVisible": false, "aTargets": [ 6, 7, 8 ] }
				     		]
	        ,"colVis": {
	            "buttonText": "Mostrar/Ocultar Columnas"
	            ,"title": "Puede personalizar hasta 5 opciones"
	            ,"aiExclude": [ 0, 9 ]
				,"restore": "Restaurar"
	         }
				
		});
		
		function closeTrs(element, api){
			$('#corpoTable tbody tr').each(
				function(){
					var tr = $(this).closest('tr');
					if(tr != element){
						var row = api.row( tr );
						if ( row.child.isShown() ) {
							$('div.slider', row.child()).slideUp( function () {
								row.child.hide();
					    		tr.removeClass('shown');
							} );
					}
				}});
			};
					
		function createTabs(row){
				if((row.data().lineStatus.status.indexOf('S') == -1) && (row.data().lineStatus.status.indexOf('C') == -1)){
							return '<div class="slider">'+
								'<div class="tabs tabs-style-line   " >' + 
									'<nav>' +
										'<ul>' +
											'<li><a id="user-change'+3333333333+'" href="#user-change-'+7777777+'"><span>Cambio de Usuario</span></a></li>' +
										'</ul>' +
									'</nav>' +
									'<div class="tab-content">' +
										'<section id="user-change-'+333333333+'">'+777777777+'</section>' +
									'</div>' +
								'</div></div>';
						}
		}
					
		function renderTabs(){
			(function() {
				[].slice.call( document.querySelectorAll( '.tabs' ) ).forEach( function( el ) {
					new CBPFWTabs( el );
				});
				})(); 
		}
		
		function renderOption(data, index){
			var bill=data.billNumber;
			
			if(data.businessType.indexOf('LD') == -1){
					$('#pinpuk'+data.billNumber).click(function(){
					$('#pinpuk'+bill).addClass('animated infinite pulse');
					$.post('${urlPinPuk}', { billNumber:data.billNumber}, function(data){
							$('#pin-puk-'+bill).html(data);
						}, 'HTML').done(function(){$('#pinpuk'+bill).removeClass('animated infinite pulse');});
					});
			}
			
			
				 var validateUserChage = false;
				$('#updateUser-'+bill).click(function(){
					var name = $('#name').val();
					var surname = $('#surname').val();
					$.post('${urlUpdateUser}', {billNumber:data.billNumber, name:name , surname:surname }, function(data){
							if(data!="ERROR"){
								validateUserChage = true;
								$('#user-change-'+bill).html(data);
							} else {
								$('#emptyError').show();
							}
				}, 'HTML').done(function(){if(validateUserChage)
							table.fnUpdate(user.toUpperCase(),index,1,false);
				});
			});
			
		$('#plansServices'+data.billNumber).click(function (){
				$('#plansServices'+bill).addClass('animated infinite pulse');
				$.post('${urlPlansAndServices}', { billNumber:data.billNumber}, function(data){
		      		$('#plans-servicies-'+bill).html(data);
		    	}, 'HTML').done(function(){$('#plansServices'+bill).removeClass('animated infinite pulse');});
			});	 
			 
	 	/*	$('#settings'+data.billNumber).click(function(){
			$.post('${urlEquipmentSettings}', { }, function(data){
					$('#settings-'+bill).html(data);
				}, 'HTML');
			});
			 $('#settings'+data.billNumber).click();*/ 
		
		}
		
		function configOption (element,message, api){
			var tr = element.closest('tr');
			var row = api.row( tr );
			closeTrs(tr, api);
			mytr=row.child;
			if ( row.child.isShown() ) {
				$('div.slider', row.child()).slideUp( function () {
					row.child.hide();
				    tr.removeClass('shown');
				});
			}else {
				row.child(message,'no-padding').show();
				renderTabs();
			
				renderOption(row.data(),row.index());
				 tr.addClass('shown');
				$('div.slider', row.child()).slideDown();		
			}
		}
		
	});
	
	function hideMsg(){
		$('#emptyError').hide();
	}