/**
 * Search Insert Position
 * Difficulty: Easy
 * Category: Array
 *
 * Description:
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 * 
 * Example 2:
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 * 
 * Example 3:
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 *
 * Constraints:
 *   - 1 <= nums.length <= 10^4
 *   - -10^4 <= nums[i] <= 10^4
 *   - nums contains distinct values sorted in ascending order.
 *   - -10^4 <= target <= 10^4
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
      3,
      5,
      6
    ],
    "target": 5
  },
    expected: 2
  },
  {
    input: {
    "nums": [
      1,
      3,
      5,
      6
    ],
    "target": 2
  },
    expected: 1
  },
  {
    input: {
    "nums": [
      1,
      3,
      5,
      6
    ],
    "target": 7
  },
    expected: 4
  }
];

// Test Runner
function runTests() {
  console.log('Running tests for: Search Insert Position\n');

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
