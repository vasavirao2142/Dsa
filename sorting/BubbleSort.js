
function bubbleSort(nums){

    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length-1;j++){
            if(nums[j]>nums[j+1]){
                let temp=nums[j];
                nums[j]=nums[j+1];
                nums[j+1]=temp;
            }
        }
    }
    return nums;
}


// console.log("Array",bubbleSort([5,8,3,2]))
 console.log("Array",bubbleSort([12,25,2,8,5]))