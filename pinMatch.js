let savingRandomNumber;

function showRandomDigits(){

      var digit = '0123456789';

      var otpLength = 4;

      var otp = '';

      for (let i = 0; i < otpLength; i++) {
            
            var index = Math.floor(Math.random()*(digit.length));

            otp = otp + digit[index];
            
      }

      /* Saving random number at global variable */
      savingRandomNumber = otp;

      /* Selecting Input Area */
      var gettingRandomInputArea = document.getElementById('showDigit');

      /* Assigning value and showing it */
      gettingRandomInputArea.value = savingRandomNumber;
}

function getOperator(inputOperator) {
      
      var selectingSubmittingInputArea = document.getElementById('showNumbers');

      if (inputOperator == 'C') {
            selectingSubmittingInputArea.value = '';      
      }
      else if (inputOperator == '<') {
            let backward = selectingSubmittingInputArea.value;
            selectingSubmittingInputArea.value = backward.substring(0, backward.length-1);
      } 
      else {
            selectingSubmittingInputArea.value += inputOperator;
      }
      
}

function submitting(){
      
      var takingNumberFromSubmitArea = document.getElementById('showNumbers');

      if (takingNumberFromSubmitArea.value == savingRandomNumber) {
            var successNotify = document.getElementById('pinMatched');
            successNotify.style.display = "block";
            reloadWindow(1200);
      }

      else{
            var unsuccessNotify = document.getElementById('pinDidNotMatch');
            unsuccessNotify.style.display = "block";

            var takingAction = document.getElementById('counting').innerText;
            let takingActionNumber = parseInt(takingAction);
            takingActionNumber -= 1;
            document.getElementById('counting').innerText = takingActionNumber;
            takingNumberFromSubmitArea.value = '';

            if (takingActionNumber == 0) {
                  reloadWindow(700);
            }
      }
}

function reloadWindow(delayTime){
      setTimeout(function(){window.location.reload();}, delayTime);
}