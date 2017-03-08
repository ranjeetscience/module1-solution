//for bonus i am considering the extra ',' in input 

( function (){

'use strict';

angular.module('LunchCheck',[])

.controller('Mycontrol',Mycontrol);

Mycontrol.$inject=['$scope','$filter'];

function Mycontrol($scope,$filter){
$scope.inputlunch="";

$scope.check=function(){
  var length=0;
  //getting the items

  var items=$scope.inputlunch;
  var a=items.split(",");

  //for bonus i am considering the extra ',' in input 
  
  for (var i = 0; i < a.length; i++) {
    if(a[i]!="")
    {
      length=length+1;
    }
  }

  if ($scope.inputlunch.length === 0 || typeof $scope.inputlunch === 'undefined') {
    //checking empty input
    $scope.message="Please enter data first";
	$scope.class="text-danger";
  }
  else if (length<=3) {
    $scope.message="Enjoy!";
	$scope.class="text-success";
    }
  else {
    $scope.message="Too much!";
	$scope.class="text-danger";
  }


};
}



})();
