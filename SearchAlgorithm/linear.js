function linearSearch(arr,target){
    let n=arr.length;
    for(let i=0;i<n;i++){
        if(arr[i]==target)
            return i;
    }return -1;
}
let sortArray=[45,77,32,-45,0,1,3,4,5,7,9,10];
let target=7;
let result=linearSearch(sortArray,target);
if(result!=-1)
    console.log(`Target ${target} found at index ${result}.`);
else
    console.log(`Target ${target} does not find at arraylist.`);