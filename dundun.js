function sayBestFriendNames(count, bestFriendName){
  var bestFriend = bestFriendName; // argument bestFriendName is a "String" datatype

  sayNameNumOfTimes(count,bestFriend);

}
function sayNameWithIndex(name, index){
  console.log(name, index);

}

function sayNameNumOfTimes(number,name){ //These are arguments
  for (var i = 0; i < number; i++){
    sayNameWithIndex(name, i); // These are parameters
  }
}
function listNamesOfBestFriends(dictionary){
  //How to access a key on an object i.e dictionary look for (key) names of Best Friends
  var names = dictionary.namesOfBestFriends;
  names.forEach(function(name) {
    sayNameNoIndex(name);

  });
}
function sayNameNoIndex(name){
  console.log(name);
}
var dictionary = {
  name : "Kit",
  namesOfBestFriends : ["Kit", "Chuck", "Tom"]
};

if (5 !== 5) {
  sayBestFriendNames(5,"Kitchucktom");
} else {
  listNamesOfBestFriends(dictionary);
}
//array = Basically a list of any data type. Shown by []
//{} = objects/dictionary
