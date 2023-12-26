function binarySearch(arr,target){
    let left =0,right=arr.length-1,mid;
    while(left<=right){
        mid=Math.floor((left+right)/2);
        if (arr[mid]==target)
            return mid;
        else if(arr[mid]<target)
            left=mid+1;
        else
            right=mid-1;
    }return -1;
}
let sortArray=[0,1,3,4,5,7,9,10];
let target=7;
let result=binarySearch(sortArray,target);
if(result!=-1)
    console.log(`Target ${target} found at index ${result}.`);
else
    console.log(`Target ${target} does not find at arraylist.`);
