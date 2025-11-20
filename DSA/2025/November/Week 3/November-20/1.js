/**
 * Contains Duplicate
 * Difficulty: Easy
 * Category: Array
 *
 * Description:
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 * 
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 * 
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 *
 * Constraints:
 *   - 1 <= nums.length <= 10^5
 *   - -10^9 <= nums[i] <= 10^9
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
      1
    ]
  },
    expected: true
  },
  {
    input: {
    "nums": [
      1,
      2,
      3,
      4
    ]
  },
    expected: false
  },
  {
    input: {
    "nums": [
      1,
      1,
      1,
      3,
      3,
      4,
      3,
      2,
      4,
      2
    ]
  },
    expected: true
  }
];

// Test Runner
function runTests() {
  console.log('Running tests for: Contains Duplicate\n');

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
