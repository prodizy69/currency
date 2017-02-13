    var app = angular.module('CurrencyConverter', []);
	
    app.controller('Appcontroller', function($scope,AppService) {
		$scope.amount = 0;
		$scope.amountArray = [];
		$scope.noOf2PoundCoins = 0;
		$scope.noOf1PoundCoins = 0;
		$scope.remainingPounds = 0;
		$scope.remainingPennies = 0;

		var caclNoOfPoundCoins = function(pounds){
			$scope.noOf2PoundCoins = Math.floor(pounds/2);
			$scope.noOf1PoundCoins= pounds % 2;
		}
    function calculateNoOfPennies(pennies) {
      $scope.noofPenniCoins = Math.floor(pennies/1);
			}
		var checkIfInputIsValid = function(){
      if(!$scope.amount || $scope.amount === 0 || !(AppService.chekCurrencySuffix($scope.amount)) || isNaN(AppService.getFinalnumber($scope.amount))){
				$scope.amountArray = [];
				$scope.isInputInPounds = false;
				$scope.isInputInPennies = false;
				alert('Please enter a valid input');
			}else{
				if(AppService.isPounds($scope.amount)){
					$scope.remainingPounds = parseInt(AppService.getFinalnumber($scope.amount).split('.')[0]);
					$scope.remainingPennies = parseInt(AppService.getFinalnumber($scope.amount).split('.')[1]);
					if($scope.remainingPounds && $scope.remainingPounds > 0){
            caclNoOfPoundCoins($scope.remainingPounds);
          }
          if($scope.remainingPennies && $scope.remainingPennies > 0 ){
            calculateNoOfPennies($scope.remainingPennies);
          }
        
				}else if(AppService.isPennies($scope.amount)){

        }
				
			}
		}
     $scope.convert = function(){
			checkIfInputIsValid();
		}
			
});
