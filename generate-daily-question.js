const fs = require('fs');
const path = require('path');

// Configuration
const BASE_DIR = 'DSA';
const QUESTIONS_FILE = 'questions-database.json';
const TRACKER_FILE = 'questions-tracker.json';

/**
 * Get the current date information
 */
function getDateInfo() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.toLocaleString('en-US', { month: 'long' });
  const day = now.getDate();

  // Calculate week number (1-4 based on day of month)
  // Week 1: days 1-7, Week 2: days 8-14, Week 3: days 15-21, Week 4: days 22-31
  const weekNumber = Math.ceil(day / 7);

  return { year, month, day, weekNumber };
}

/**
 * Create folder structure
 */
function createFolderStructure(year, month, weekNumber, day) {
  const folderPath = path.join(
    BASE_DIR,
    String(year),
    month,
    `Week ${weekNumber}`,
    `${month}-${day}`
  );

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`Created folder: ${folderPath}`);
  } else {
    console.log(`Folder already exists: ${folderPath}`);
  }

  return folderPath;
}

/**
 * Load questions database
 */
function loadQuestions() {
  const questionsData = fs.readFileSync(QUESTIONS_FILE, 'utf8');
  return JSON.parse(questionsData);
}

/**
 * Load or initialize questions tracker
 */
function loadTracker() {
  if (fs.existsSync(TRACKER_FILE)) {
    const trackerData = fs.readFileSync(TRACKER_FILE, 'utf8');
    return JSON.parse(trackerData);
  }
  return { usedQuestionIds: [], currentIndex: 0 };
}

/**
 * Save questions tracker
 */
function saveTracker(tracker) {
  fs.writeFileSync(TRACKER_FILE, JSON.stringify(tracker, null, 2));
}

/**
 * Get next question
 */
function getNextQuestion(questions, tracker) {
  // If all questions have been used, reset
  if (tracker.currentIndex >= questions.length) {
    tracker.currentIndex = 0;
    tracker.usedQuestionIds = [];
  }

  const question = questions[tracker.currentIndex];
  tracker.usedQuestionIds.push(question.id);
  tracker.currentIndex++;

  return question;
}

/**
 * Generate test cases code
 */
function generateTestCases(question) {
  const testCasesCode = question.testCases.map((testCase, index) => {
    const inputStr = JSON.stringify(testCase.input, null, 2).replace(/\n/g, '\n  ');
    const expectedStr = JSON.stringify(testCase.expected);

    return `  {
    input: ${inputStr},
    expected: ${expectedStr}
  }`;
  }).join(',\n');

  return `[\n${testCasesCode}\n]`;
}

/**
 * Generate the question file content
 */
function generateQuestionFile(question) {
  const examples = question.examples.map((ex, index) =>
    `Example ${index + 1}:
Input: ${ex.input}
Output: ${ex.output}${ex.explanation ? `\nExplanation: ${ex.explanation}` : ''}`
  ).join('\n\n');

  const constraints = question.constraints.map(c => `  - ${c}`).join('\n');

  const testCasesArray = generateTestCases(question);

  return `/**
 * ${question.title}
 * Difficulty: ${question.difficulty}
 * Category: ${question.category}
 *
 * Description:
 * ${question.description.split('\n').join('\n * ')}
 *
 * ${examples.split('\n').join('\n * ')}
 *
 * Constraints:
${constraints.split('\n').map(line => ` * ${line}`).join('\n')}
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
const testCases = ${testCasesArray};

// Test Runner
function runTests() {
  console.log('Running tests for: ${question.title}\\n');

  let passedTests = 0;

  testCases.forEach((testCase, index) => {
    const result = solution(testCase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);

    console.log(\`Test \${index + 1}: \${passed ? '✅ PASSED' : '❌ FAILED'}\`);
    console.log(\`  Input: \${JSON.stringify(testCase.input)}\`);
    console.log(\`  Expected: \${JSON.stringify(testCase.expected)}\`);
    console.log(\`  Got: \${JSON.stringify(result)}\`);
    console.log('');

    if (passed) passedTests++;
  });

  console.log(\`Results: \${passedTests}/\${testCases.length} tests passed\`);
}

// Run tests
runTests();
`;
}

/**
 * Main function
 */
function main() {
  try {
    // Get date information
    const { year, month, day, weekNumber } = getDateInfo();
    console.log(`Generating question for ${month} ${day}, ${year} (Week ${weekNumber})`);

    // Create folder structure
    const folderPath = createFolderStructure(year, month, weekNumber, day);

    // Load questions and tracker
    const questions = loadQuestions();
    const tracker = loadTracker();

    // Get next question
    const question = getNextQuestion(questions, tracker);
    console.log(`Selected question: ${question.title}`);

    // Generate question file
    const fileContent = generateQuestionFile(question);
    const filePath = path.join(folderPath, '1.js');

    // Check if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`File already exists: ${filePath}`);
      console.log('Skipping file creation to avoid overwriting.');
      return;
    }

    // Write file
    fs.writeFileSync(filePath, fileContent);
    console.log(`Created file: ${filePath}`);

    // Save tracker
    saveTracker(tracker);
    console.log('Updated questions tracker');

    console.log('\\nDaily question generated successfully!');
  } catch (error) {
    console.error('Error generating daily question:', error);
    process.exit(1);
  }
}

// Run the script
main();
