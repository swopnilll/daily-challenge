# Daily DSA Question Automation

Automatically generates and commits one LeetCode-style DSA question every day to help you practice consistently.

## Folder Structure

```
DSA/
└── 2025/
    └── October/
        ├── Week 1/
        │   ├── October-1/
        │   │   └── 1.js
        │   ├── October-2/
        │   │   └── 1.js
        │   └── ...
        ├── Week 2/
        ├── Week 3/
        ├── Week 4/
        │   ├── October-25/
        │   │   └── 1.js
        │   └── October-26/
        │       └── 1.js
        └── Week 5/
```

Week numbering:
- Week 1: Days 1-7
- Week 2: Days 8-14
- Week 3: Days 15-21
- Week 4: Days 22-28
- Week 5: Days 29-31

## How It Works

### Automation
- **GitHub Actions** runs daily at 00:00 UTC (midnight)
- Generates one question per day
- Automatically commits and pushes to GitHub
- Tracks progress through 20 LeetCode Easy Array questions

### Manual Generation
To manually generate today's question:
```bash
node generate-daily-question.js
```

### Testing
To test the automation (generates 5 consecutive days):
```bash
node test-generate-questions.js
```

## Files

- `questions-database.json` - 20 LeetCode Easy Array questions
- `test-questions-database.json` - 5 simple test questions
- `generate-daily-question.js` - Main automation script
- `test-generate-questions.js` - Test script for multiple days
- `questions-tracker.json` - Tracks which questions have been used
- `.github/workflows/daily-commit.yml` - GitHub Actions workflow

## How to Use

### 1. Receive Daily Question
Every day, a new question file is automatically created and committed.

### 2. Solve the Problem
Open the day's file (e.g., `DSA/2025/October/Week 4/October-25/1.js`) and implement your solution in the `solution()` function:

```javascript
function solution(input) {
  // TODO: Implement your solution here
  const { nums, target } = input;

  // Your code here

  return result;
}
```

### 3. Run Tests
Test your solution:
```bash
node "DSA/2025/October/Week 4/October-25/1.js"
```

You'll see output like:
```
Running tests for: Two Sum

Test 1: ✅ PASSED
  Input: {"nums":[2,7,11,15],"target":9}
  Expected: [0,1]
  Got: [0,1]

Results: 3/3 tests passed
```

## Customization

### Change Question Difficulty/Type
Edit `questions-database.json` to add your own questions or change difficulty levels.

### Change Schedule
Edit `.github/workflows/daily-commit.yml`:
```yaml
schedule:
  - cron: '0 0 * * *'  # Change this line
```

### Change Folder Structure
Modify the `createFolderStructure()` function in `generate-daily-question.js`.

## What Happens When...

### All questions are used?
The automation cycles back to the first question.

### A new month starts?
Automatically creates a new month folder (e.g., November).

### You miss a day?
The next run will generate the question for that day. No questions are skipped.

## GitHub Actions Workflow

The workflow:
1. Checks out the repository
2. Sets up Node.js
3. Runs the generation script
4. Commits changes (if any)
5. Pushes to GitHub

View workflow runs: Actions tab in your GitHub repository

## Manual Trigger

You can manually trigger the workflow:
1. Go to Actions tab on GitHub
2. Select "Daily DSA Question Generator"
3. Click "Run workflow"

---

Generated with Claude Code | https://claude.com/claude-code
