function getEven(arr) {
    /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90]

        Write you code below
    */
    let evenElementsArr = arr.filter(Number => Number%2 == 0);
    return evenElementsArr;
}

function getEven1(arr){
    let evenElements=[]
    for(i=0; i<arr.length;i++){
        if (arr[i]%2 === 0){ //value and data type
            evenElements.push(arr[i])
        }

    }
    return evenElements;
}

function multiplyByN(arr, n) {
    /* 
        Return an array whose elements are multiplied by n
        Example
            Input: [1,3,4,55], 3
            Output: [3,9,13,165]
        Write you code below
    */
    let elementsMultiplyByN = [];
    for(i=0; i<arr.length; i++){
        elementsMultiplyByN.push(arr[i]*n);
    }
    return elementsMultiplyByN;
}

function removeNthElement(arr, n) {
    /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */
    arr.splice(n,1);
    return arr;
}

function removeNthElement1(arr,n){
    let ansArr=[];
    for (i=0; i<arr.length;i++){
        if (arr[i] !== n){
            ansArr.push(arr[i])
        }
    }
    return ansArr;    
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}