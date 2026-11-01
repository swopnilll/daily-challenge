const fs = require('node:fs');
const path = require('node:path');

function generate({ root = __dirname, date = new Date() } = {}) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Australia/Perth', year: 'numeric', month: 'long', day: 'numeric'
  }).formatToParts(date);
  const value = type => parts.find(part => part.type === type).value;
  const year = value('year'), month = value('month'), day = Number(value('day'));
  const database = JSON.parse(fs.readFileSync(path.join(root, 'learning-database.json'), 'utf8'));
  const trackerPath = path.join(root, 'learning-tracker.json');
  const tracker = fs.existsSync(trackerPath)
    ? JSON.parse(fs.readFileSync(trackerPath, 'utf8')) : {};
  const tracks = [
    ['concepts', 'Learn-New-Concept', 'Learn New Concept'],
    ['systemDesign', 'System-Design', 'System Design Challenge']
  ];
  // Validate both tracks before writing either exercise.
  for (const [key] of tracks) {
    if (!Array.isArray(database[key]) || database[key].length === 0) throw new Error(`Empty track: ${key}`);
    if (new Set(database[key].map(item => item.id)).size !== database[key].length) {
      throw new Error(`Duplicate exercise IDs in ${key}`);
    }
    for (const item of database[key]) {
      if (!item.title || !item.brief || !Array.isArray(item.tasks) || !item.tasks.length || item.tasks.length > 3 || !item.id || !item.source?.title || !item.source?.focus || !item.source?.url?.startsWith('https://')) {
        throw new Error(`Invalid exercise in ${key}`);
      }
    }
    if (tracker[key] !== undefined && (!Number.isInteger(tracker[key]) || tracker[key] < 0)) {
      throw new Error(`Invalid tracker: ${key}`);
    }
  }
  // Preflight all missing exercises before writing either track.
  for (const [key, folder] of tracks) {
    const target = path.join(root, folder, year, month, `Week ${Math.ceil(day / 7)}`, `${month}-${day}`, 'README.md');
    if (!fs.existsSync(target) && (tracker[key] || 0) >= database[key].length) {
      throw new Error(`Curriculum exhausted for ${key}. Add new source-backed entries to learning-database.json; completed topics will not repeat.`);
    }
  }
  const created = [];
  for (const [key, folder, label] of tracks) {
    const target = path.join(root, folder, year, month, `Week ${Math.ceil(day / 7)}`, `${month}-${day}`, 'README.md');
    if (fs.existsSync(target)) continue;
    const index = tracker[key] || 0;
    const item = database[key][index];
    const content = `# ${label}: ${item.title}\n\nDate: ${month} ${day}, ${year} (Australia/Perth)\n\n${item.brief}\n\n## Reading\n\n[${item.source.title}](${item.source.url})\n\nFocus: ${item.source.focus}. Read the relevant section, not the whole article.\n\n${key === 'systemDesign' ? 'Original practice scenario informed by the linked resource; not a question quoted from its publisher.' : 'Original study prompts based on the linked resource.'}\n\n## Your tasks\n\n${item.tasks.map(task => `- [ ] ${task}`).join('\n')}\n\n## Notes and solution\n\nWrite your explanation, examples, and decisions here.\n`;
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, content, { flag: 'wx' });
    tracker[key] = index + 1;
    // Persist after each track so a retry can recover a partially completed day.
    fs.writeFileSync(trackerPath, JSON.stringify(tracker, null, 2) + '\n');
    created.push(target);
  }
  return created;
}

if (require.main === module) {
  try { console.log(generate().join('\n') || 'Today’s exercises already exist.'); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}
module.exports = { generate };
