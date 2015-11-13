var p = new Promise(function(resolve, reject) {
  // Run your code here
  var k = true;
  console.log("My Name is KingDomPan");
  // Change the State
  if (k === true) {
    resolve("KingDomPan");
  } else {
    reject("Also KingDomPan");
  }
});

var pp = p.then(function(input) {
  console.log("The Return From Resolve Callback " + input);
}, function(input) {
  console.log("The Return From Reject Callback " + input);
});