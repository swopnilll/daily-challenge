/**
 * Find Pivot Index
 * Difficulty: Easy
 * Category: Array
 *
 * Description:
 * Given an array of integers nums, calculate the pivot index of this array.
 * 
 * The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
 * 
 * If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
 * 
 * Return the leftmost pivot index. If no such index exists, return -1.
 *
 * Example 1:
 * Input: nums = [1,7,3,6,5,6]
 * Output: 3
 * Explanation: The pivot index is 3. Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11. Right sum = nums[4] + nums[5] = 5 + 6 = 11.
 * 
 * Example 2:
 * Input: nums = [1,2,3]
 * Output: -1
 * Explanation: There is no index that satisfies the conditions in the problem statement.
 * 
 * Example 3:
 * Input: nums = [2,1,-1]
 * Output: 0
 * Explanation: The pivot index is 0. Left sum = 0. Right sum = nums[1] + nums[2] = 1 + -1 = 0.
 *
 * Constraints:
 *   - 1 <= nums.length <= 10^4
 *   - -1000 <= nums[i] <= 1000
 */

/**
 * Solution
 * @param {Object} input - The input parameters for the problem
 * @return {any} - The result
 */
function solution(input) {
  // TODO: Implement your solution here

}

// Test Cases
const testCases = [
  {
    input: {
    "nums": [
      1,
      7,
      3,
      6,
      5,
      6
    ]
  },
    expected: 3
  },
  {
    input: {
    "nums": [
      1,
      2,
      3
    ]
  },
    expected: -1
  },
  {
    input: {
    "nums": [
      2,
      1,
      -1
    ]
  },
    expected: 0
  }
];

// Test Runner
function runTests() {
  console.log('Running tests for: Find Pivot Index\n');

  let passedTests = 0;

  testCases.forEach((testCase, index) => {
    const result = solution(testCase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);

    console.log(`Test ${index + 1}: ${passed ? '✅ PASSED' : '❌ FAILED'}`);
    console.log(`  Input: ${JSON.stringify(testCase.input)}`);
    console.log(`  Expected: ${JSON.stringify(testCase.expected)}`);
    console.log(`  Got: ${JSON.stringify(result)}`);
    console.log('');

    if (passed) passedTests++;
  });

  console.log(`Results: ${passedTests}/${testCases.length} tests passed`);
}

// Run tests
runTests();
