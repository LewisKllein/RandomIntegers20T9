document.addEventListener('DOMContentLoaded',function(){

  var numberArr = [];
  var newArr = [];
  var counter = 0;

  //Generate random numbers and populate the array and dispaly it in sp1 span tag
  function myRangeRandom(myMin,myMax){
    return Math.floor(Math.random() * (myMax-myMin + 1)) + myMin;
  };

  for (var i = 0; i < 20; i++){

    var randomNr = myRangeRandom(1,10);
    numberArr.push(randomNr);
  }

  document.getElementById('sp1').innerText = numberArr;
  console.log("The generated array :", numberArr);
  var indexArr = [...numberArr];

  //Find the Min and Max of the array: sort it and min is first / max is last

  var minMax = numberArr.sort(function(a,b){
    return a - b;
  });
  console.log("Sorted array : ",minMax);
  var minNr = minMax[0];
  var maxNr = minMax[minMax.length-1];

  document.getElementById('sp2').innerText =`The minimum value is: ${minNr}, and the maximum value is: ${maxNr} !`

  //ask form number input, validate and return how many times occur number in the Array

  const getValForm = document.forms['askNr1'];

  getValForm.addEventListener('submit',function(e){
    e.preventDefault();
    var valueBox = getValForm.querySelector('input[type="text"]').value;
    console.log(valueBox);

    if (isNaN(valueBox) || valueBox < 1 || valueBox > 10) {
      alert("Input not valid ! Please try another number from 1 to 10 !");
      getValForm.querySelector('input[type="text"]').value = '';

    } else {
      numberArr.forEach(function(value,index){
        if(value == valueBox) {
          counter++;
          document.getElementById('msg1').innerText = `The searched number ${valueBox} appears : ${counter} times in the array !`;
          console.log(`The searched number appears : ${counter} times in array !`);
        }else if(value != valueBox){
          document.getElementById("msg3").innerText = `The searched number: "${valueBox}" was not found in the array !`;
        };

      });
    };

    resetCountInput();

    function resetCountInput(){
      counter = 0;
      getValForm.querySelector('input[type="text"]').value = '';
    };
  });

  //ask form number input, validate and return first occurence of given number in array
  //for this step I used a clone of the newArr saved in indexArr
  const getValForm2 = document.forms['askNr2'];

  getValForm2.addEventListener('submit',function(e){
    e.preventDefault();
    var valueBox2 = getValForm2.querySelector('input[type="text"]').value;
    console.log(valueBox2);

    if (isNaN(valueBox2) || valueBox2 < 1 || valueBox2 > 10) {
      alert("Input not valid ! Please try another number from 1 to 10 !");
      getValForm2.querySelector('input[type="text"]').value = '';

    }else {
      function checkIndex(nr) {
        return nr == valueBox2;
      }
      document.getElementById("msg2").innerText = `The searched number: "${valueBox2}" occurs first time in the array at position : ${indexArr.findIndex(checkIndex)}.`;
      console.log(indexArr);
    };

    if(indexArr.findIndex(checkIndex)== -1){
      document.getElementById("msg2").innerText = `The searched number: "${valueBox2}" was not found in the array !`;
    };

    resetCountInput();

    function resetCountInput(){
      counter = 0;
      getValForm2.querySelector('input[type="text"]').value = '';
    };
  });
});
