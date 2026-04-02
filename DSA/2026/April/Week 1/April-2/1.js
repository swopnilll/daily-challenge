/**
 * Sort Array By Parity
 * Difficulty: Easy
 * Category: Array
 *
 * Description:
 * Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
 * 
 * Return any array that satisfies this condition.
 *
 * Example 1:
 * Input: nums = [3,1,2,4]
 * Output: [2,4,3,1]
 * Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 * 
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 *
 * Constraints:
 *   - 1 <= nums.length <= 5000
 *   - 0 <= nums[i] <= 5000
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
      3,
      1,
      2,
      4
    ]
  },
    expected: [2,4,3,1]
  },
  {
    input: {
    "nums": [
      0
    ]
  },
    expected: [0]
  }
];

// Test Runner
function runTests() {
  console.log('Running tests for: Sort Array By Parity\n');

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
