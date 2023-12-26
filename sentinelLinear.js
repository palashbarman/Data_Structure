function sentinelSearch(arr,target){
    var n=arr.length,i=0;
    var last=arr[n-1];
    arr[n-1]=target;
    while(arr[i]!=target)
        i++;
    arr[n-1]=last;
    if(i<n-1 || arr[n-1]==target)
        return i;
    return -1;
}
var arr=[9,4,3,6,4,2,8,99,33,0,-44,24,27,66],target=-44;
var result=sentinelSearch(arr,target);
if(result!=-1)
    console.log(`${target}  is present at index ${result}.`);
else
    console.log(`${target} is not present in this arraylist.`);