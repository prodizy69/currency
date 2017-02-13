angular.module('CurrencyConverter').service('AppService',AppService);
function AppService (){

    this.chekCurrencySuffix = function(curr) {
    	var amountArray = curr.split('');
			if(amountArray[amountArray.length-1] === 'p'){
				amountArray.pop();
				var finalNumber = amountArray.join('');
				isInputInPennies = true;
				return true;
			}
      else if(amountArray[amountArray.length-1] === '$'){
                amountArray.splice(amountArray.length-1,1);
                var finalNumber = amountArray.join('');
                isInputInPounds = true;
                return true;
            }else{
                return false;
            }		
        
  }
  this.isPounds = function(amount){
    	var amountArray = amount.split('');
			if(amountArray[amountArray.length-1] === '$'){
			
      	amountArray.pop();
				var finalNumber = amountArray.join('');
		  	return true;
			}
  }
  this.isPennies = function (amount){
	  var amountArray = amount.split('');
			if(amountArray[amountArray.length-1] === 'p'){
				amountArray.pop();
				var finalNumber = amountArray.join('');
				return true;
			}
  }
  this.getFinalnumber = function (amountVal) {
    var finalNumber;
    var amountArray = amountVal.split('');
			if(amountArray[amountArray.length-1] === 'p'){
				amountArray.pop();
				finalNumber = amountArray.join('');
				return finalNumber;
			}
      else if(amountArray[amountArray.length-1] === '$'){
          amountArray.splice(amountArray.length-1,1);
          finalNumber = amountArray.join('');
          return finalNumber;
      }	
    
  }
}
