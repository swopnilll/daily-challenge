/**
 * Intersection of Two Arrays II
 * Difficulty: Easy
 * Category: Array
 *
 * Description:
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 *
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2,2]
 * 
 * Example 2:
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [4,9] or [9,4]
 *
 * Constraints:
 *   - 1 <= nums1.length, nums2.length <= 1000
 *   - 0 <= nums1[i], nums2[i] <= 1000
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
    "nums1": [
      1,
      2,
      2,
      1
    ],
    "nums2": [
      2,
      2
    ]
  },
    expected: [2,2]
  },
  {
    input: {
    "nums1": [
      4,
      9,
      5
    ],
    "nums2": [
      9,
      4,
      9,
      8,
      4
    ]
  },
    expected: [4,9]
  }
];

// Test Runner
function runTests() {
  console.log('Running tests for: Intersection of Two Arrays II\n');

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
