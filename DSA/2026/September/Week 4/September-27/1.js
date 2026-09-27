/**
 * Third Maximum Number
 * Difficulty: Easy
 * Category: Array
 *
 * Description:
 * Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
 *
 * Example 1:
 * Input: nums = [3,2,1]
 * Output: 1
 * Explanation: The first distinct maximum is 3. The second distinct maximum is 2. The third distinct maximum is 1.
 * 
 * Example 2:
 * Input: nums = [1,2]
 * Output: 2
 * Explanation: The first distinct maximum is 2. The second distinct maximum is 1. The third distinct maximum does not exist, so the maximum (2) is returned instead.
 * 
 * Example 3:
 * Input: nums = [2,2,3,1]
 * Output: 1
 * Explanation: The first distinct maximum is 3. The second distinct maximum is 2. The third distinct maximum is 1.
 *
 * Constraints:
 *   - 1 <= nums.length <= 10^4
 *   - -2^31 <= nums[i] <= 2^31 - 1
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
      2,
      1
    ]
  },
    expected: 1
  },
  {
    input: {
    "nums": [
      1,
      2
    ]
  },
    expected: 2
  },
  {
    input: {
    "nums": [
      2,
      2,
      3,
      1
    ]
  },
    expected: 1
  }
];

// Test Runner
function runTests() {
  console.log('Running tests for: Third Maximum Number\n');

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
