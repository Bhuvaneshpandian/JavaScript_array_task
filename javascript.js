Given an array of integers and a target value, return the indices of the two numbers that add up to the target value.
const nums = [2, 7, 11, 15];
const target = 9;
function twoSum(numbers,t){
  for(let i=0;i<twoSum.length;i++){
     for(let j=0;j<twoSum.length;j++){
       if(numbers[i] + numbers[j] ===t){
         return [i,j]
       }
    
  }
  }
  
}

console.log(twoSum(nums,target))

2. Find the Duplicate Number
const nums = [1, 3, 4, 2, 2];
function findDuplicate(numbers){
  return numbers.filter((value,index)=>{
   return nums.indexOf(value) === index
  })
}
const result = findDuplicate(nums);
console.log(result);

const intervals = [[1, 3], [2, 6], [8, 10], [7,14], [15, 18]];

5. Merge Intervals
function mergeIntervals(intervals){
  for(let i=0; i<intervals.length;i++){
    if(!intervals[i+1]){
      return intervals
    }
    if(intervals[i][1] > intervals[i+1][0]){
      intervals.splice(i,2,[intervals[i][0],intervals[i+1][1]])
    }
  }
return intervals

}
const result =  mergeIntervals(intervals);
console.log(result); // Outputs: [[1, 6], [8, 10], [15, 18]]

