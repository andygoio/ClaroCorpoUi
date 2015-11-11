Waves.displayEffect();

function maxLengthCheck(object) {
    if (object.value.length > 4){
        object.value = object.value.slice(0, 4)
    }
}

function autorizerLineEvent() {
$("#autorizerLine").val().length
}

//var app = angular.module("app", ["xeditable"]);
var app = angular.module("app", ["xeditable", "ngMockE2E"]);

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.controller('TextBtnCtrl', function($scope) {
    $scope.account = {
        tel: '1132677029'
    };  
});

app.controller('emailChangeCtrl', function($scope) {
    $scope.account = {
        email: 'cachorro_loco2003@hotmail.com'
    };  
});


app.controller('passwordChangeCtrl', function($scope, $filter, $http) {
    $scope.account = {
        password: '',
        confirmPassword: ''
    }; 
    
//    var pass1 = $scope.password;

//    $scope.checkPassword = function(data) {
//        $scope.account.password=data;
//    };
//    
//    $scope.checkConfirm = function(data) {
//        $scope.account.confirmPassword=data;
//    };
    
    $scope.checkPass = function(data) {
//        pass1=$scope.editableForm.$editables[0].scope.$data;
//        pass2=$scope.editableForm.$editables[1].scope.$data;
        password = $scope.editableForm.password;
        confirmPassword = $scope.editableForm.confirmPassword;
        
        if (password != confirmPassword) {

            
            
// amaran Notification:
//            function getErrorCaptcha(){
//                $.amaran.close();
//                var t=  $.amaran({
//                        content:{
//                            bgcolor:'#8e44ad',
//                        color:'#fff',
//                        message:'Las claves no pueden ser distintas.'
//                       },
//                    theme:'user',
//                    delay: 70000000,
//                    position:'top left',
//                    closeButton:true,
//                    cssanimationIn: 'tada',
//                    cssanimationOut: 'zoomOut',
//                    targetId: 'error-container-pass-account'
//                });
//            }
            
        // amaran Notification:
        $.amaran.close();
        var t=  $.amaran({
            content:{
                bgcolor:'#8e44ad',
                color:'#fff',
                message:'Las claves no pueden ser distintas.'
            },
            theme:'user',
            delay: 70000000,
            position:'top left',
            closeButton:true,
            cssanimationIn: 'tada',
            cssanimationOut: 'zoomOut',
            targetId: 'error-container-pass-account'
        });
            
//    $.amaran({
//        content:{
//            bgcolor:'#000',
//            color:'#d32c1c',
//            message:'El número de cuenta ingresado y/o la clave, son erróneos. Por favor, verifique los datos e inténtelo nuevamente.'
//           },
//        theme:'user',
//        position:'bottom right',
//        closeButton:true,
//        cssanimationIn: 'tada',
//        cssanimationOut: 'zoomOut',
//		delay: 7000
//    });
            
//            return "Las claves no pueden ser distintas";
        }
    };
    

    $scope.checkPass2 = function(data) {
        var pass2 = data;
    };

    $scope.saveAccount = function() {
        // $scope.account already updated!
        return $http.post('/saveAccount', $scope.account).error(function(err) {
            if(err.field && err.msg) {
                // err like {field: "name", msg: "Server-side error for this username!"} 
                $scope.editableForm.$setError(err.field, err.msg);
            } else { 
                // unknown error
                $scope.editableForm.$setError('name', 'Unknown error!');
            }
        });
    };
});

// ---------------- mock $http requests --------------------
app.run(function($httpBackend) {
    $httpBackend.whenPOST(/\/saveAccount/).respond(function(method, url, data) {
        data = angular.fromJson(data);
        if(data.name === 'error') {
            return [500, {field: 'name', msg: 'Server-side error for this username!'}]; 
        } else {
            return [200, {status: 'ok'}]; 
        }
    });
});