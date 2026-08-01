/**
 * Two Sum
 * Difficulty: Easy
 * Category: Array
 *
 * Description:
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * You can return the answer in any order.
 *
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 * Constraints:
 *   - 2 <= nums.length <= 10^4
 *   - -10^9 <= nums[i] <= 10^9
 *   - -10^9 <= target <= 10^9
 *   - Only one valid answer exists.
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
      2,
      7,
      11,
      15
    ],
    "target": 9
  },
    expected: [0,1]
  },
  {
    input: {
    "nums": [
      3,
      2,
      4
    ],
    "target": 6
  },
    expected: [1,2]
  },
  {
    input: {
    "nums": [
      3,
      3
    ],
    "target": 6
  },
    expected: [0,1]
  }
];

// Test Runner
function runTests() {
  console.log('Running tests for: Two Sum\n');

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
