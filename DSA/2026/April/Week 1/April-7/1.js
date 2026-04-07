/**
 * Plus One
 * Difficulty: Easy
 * Category: Array
 *
 * Description:
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
 * 
 * Increment the large integer by one and return the resulting array of digits.
 *
 * Example 1:
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123. Incrementing by one gives 123 + 1 = 124.
 * 
 * Example 2:
 * Input: digits = [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321. Incrementing by one gives 4321 + 1 = 4322.
 * 
 * Example 3:
 * Input: digits = [9]
 * Output: [1,0]
 * Explanation: The array represents the integer 9. Incrementing by one gives 9 + 1 = 10.
 *
 * Constraints:
 *   - 1 <= digits.length <= 100
 *   - 0 <= digits[i] <= 9
 *   - digits does not contain any leading 0's.
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
    "digits": [
      1,
      2,
      3
    ]
  },
    expected: [1,2,4]
  },
  {
    input: {
    "digits": [
      4,
      3,
      2,
      1
    ]
  },
    expected: [4,3,2,2]
  },
  {
    input: {
    "digits": [
      9
    ]
  },
    expected: [1,0]
  }
];

// Test Runner
function runTests() {
  console.log('Running tests for: Plus One\n');

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
