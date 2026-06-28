/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let mergeArray = nums1.concat(nums2).sort((a, b) => a - b);

    if (mergeArray.length % 2 !== 0) {
        return mergeArray[Math.floor(mergeArray.length / 2)];
    } else {
        let middle2 = mergeArray.length / 2;
        let middle1 = middle2 - 1;

        return (mergeArray[middle1] + mergeArray[middle2]) / 2;
    };
};