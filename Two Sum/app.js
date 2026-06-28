var twoSum = function(nums, target) {
    let response = [];
    for(i = 0; i < nums.length; i++) {
        for(j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                response.push(i, j);
                return response;
            }
        }
    }
};