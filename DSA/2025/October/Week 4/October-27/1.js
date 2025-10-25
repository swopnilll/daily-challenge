/**
 * TEST: Sum of Array
 * Difficulty: Easy
 * Category: Array
 *
 * Description:
 * Given an array of integers, return the sum of all elements.
 *
 * Example 1:
 * Input: nums = [1,2,3,4,5]
 * Output: 15
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
      5
    ]
  },
    expected: 15
  },
  {
    input: {
    "nums": [
      10,
      -5,
      3
    ]
  },
    expected: 8
  }
];

// Test Runner
function runTests() {
  console.log('Running tests for: TEST: Sum of Array\n');

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
