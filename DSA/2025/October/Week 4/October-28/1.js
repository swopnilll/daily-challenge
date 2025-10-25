/**
 * TEST: Count Even Numbers
 * Difficulty: Easy
 * Category: Array
 *
 * Description:
 * Given an array of integers, count how many even numbers are in the array.
 *
 * Example 1:
 * Input: nums = [1,2,3,4,5,6]
 * Output: 3
 *
 * Constraints:
 *   - 1 <= nums.length <= 1000
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
      2,
      3,
      4,
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
      3,
      5,
      7
    ]
  },
    expected: 0
  }
];

// Test Runner
function runTests() {
  console.log('Running tests for: TEST: Count Even Numbers\n');

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
