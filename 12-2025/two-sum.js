var twoSum = function(nums, target) {
    if(nums<2){
        return "array must be longer than 1 element"
    }
    for(i=0; i<nums.length ; i++){
        for(j=0; j<nums.length; j++ ){
            if(i===j){
                continue
            };
            check = nums[i]+nums[j]
            if(check === target){
                indecies = [j,i];
                break;
            }
        }
    }
    return indecies
};

console.log(twoSum([3,3],6));