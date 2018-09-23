function palindrome() {

  var str = document.getElementById("word").value;
  //gather users word input

  var strippedString = str.replace(/[\W_]+/g,"");
  //strips non alphaNumerical characters
  var lowerCaseString = strippedString.toLowerCase(); 
  //Turns str to lower case
  var splitString = lowerCaseString.split(""); 
  //return to new array
  var reversedString = splitString.reverse();
  //reverses array
  var joinedString = reversedString.join("");
  //joins array
  
  var comparisonChamberOne = [];
  //array for original string
  var comparisonChamberTwo = [];
  //array for reversed string to compare to original

  for (var i = 0;i < lowerCaseString.length;i++){
    comparisonChamberOne.push(lowerCaseString[i]);
  }
  //pushes original string to array

  for (var x = 0;x < joinedString.length;x++){
    comparisonChamberTwo.push(joinedString[x]);
  }
  //pushes reversed string to array

  if (comparisonChamberOne.length === comparisonChamberTwo.length &&
    comparisonChamberOne.every((item, index) => comparisonChamberTwo[index] === item)){
      $("#resultLine").html(strippedString+" is a palindrome :)");
      $("#theForm").css("background-color", "#76d275");
  }else{
      $("#resultLine").html(strippedString+" isn't a palindrome :(");
      $("#theForm").css("background-color", "#ef5350");
  }

  //checks array items against each other for equality


  return true;
}







