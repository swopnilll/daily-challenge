/**
 * Find All Numbers Disappeared in an Array
 * Difficulty: Easy
 * Category: Array
 *
 * Description:
 * Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
 *
 * Example 1:
 * Input: nums = [4,3,2,7,8,2,3,1]
 * Output: [5,6]
 * 
 * Example 2:
 * Input: nums = [1,1]
 * Output: [2]
 *
 * Constraints:
 *   - n == nums.length
 *   - 1 <= n <= 10^5
 *   - 1 <= nums[i] <= n
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
      4,
      3,
      2,
      7,
      8,
      2,
      3,
      1
    ]
  },
    expected: [5,6]
  },
  {
    input: {
    "nums": [
      1,
      1
    ]
  },
    expected: [2]
  }
];

// Test Runner
function runTests() {
  console.log('Running tests for: Find All Numbers Disappeared in an Array\n');

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
