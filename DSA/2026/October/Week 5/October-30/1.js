/**
 * Single Number
 * Difficulty: Easy
 * Category: Array
 *
 * Description:
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * 
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *
 * Example 1:
 * Input: nums = [2,2,1]
 * Output: 1
 * 
 * Example 2:
 * Input: nums = [4,1,2,1,2]
 * Output: 4
 * 
 * Example 3:
 * Input: nums = [1]
 * Output: 1
 *
 * Constraints:
 *   - 1 <= nums.length <= 3 * 10^4
 *   - -3 * 10^4 <= nums[i] <= 3 * 10^4
 *   - Each element in the array appears twice except for one element which appears only once.
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
      2,
      1
    ]
  },
    expected: 1
  },
  {
    input: {
    "nums": [
      4,
      1,
      2,
      1,
      2
    ]
  },
    expected: 4
  },
  {
    input: {
    "nums": [
      1
    ]
  },
    expected: 1
  }
];

// Test Runner
function runTests() {
  console.log('Running tests for: Single Number\n');

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
