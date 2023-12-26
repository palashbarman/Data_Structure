//Recursive Implementation
function ternarySearch(left, right, key, arr) {
    if (right >= left) {
        var mid1 = left + parseInt((right - left) / 3, 10);
        var mid2 = right + parseInt((right - left) / 3, 10);
        if (arr[mid1] == key)
            return mid1;
        else if (arr[mid2] == key)
            return mid2;
        else if (key < arr[mid1])
            return ternarySearch(left, mid1 - 1, key, arr);
        else if (key > arr[mid2])
            return ternarySearch(mid2 + 1, right, key, arr);
        else
            return ternarySearch(mid1 + 1, mid2 - 1, key, arr);
    } return -1;
}
//ITERATIVE APPROCH
function ternarySearch1(left, right, key, arr) {
    while (right >= left) {
        var mid1 = left + parseInt((right - left) / 3, 10);
        var mid2 = right + parseInt((right - left) / 3, 10);
        if (arr[mid1] == key)
            return mid1;
        else if (arr[mid2] == key)
            return mid2;
        else if (key < arr[mid1])
            right=mid1-1;
        else if (key > arr[mid2])
            left=mid2+1;
        else
            left=mid1+1;right=mid2-1;
    } return -1;
}

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,15,20,25,30];
var left = 0, right = arr.length, key = 120;
var result = ternarySearch(left, right, key, arr);
if (result != -1)
    console.log(`${key}  is present at index ${result}.`);
else
    console.log(`${key} is not present in this arraylist.`);