function CreateObject(arr) {
    // Write your code here
    var ansObj = {};
    for (var i=0; i<arr.length; i=i+2){
        ansObj[arr[i]]= arr[i+1];
    }
    return ansObj;
}

module.exports = CreateObject;
