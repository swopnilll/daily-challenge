const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { generate } = require('./generate-daily-question');
const root = fs.mkdtempSync(path.join(os.tmpdir(), 'daily-learning-'));
try {
  fs.copyFileSync(path.join(__dirname, 'learning-database.json'), path.join(root, 'learning-database.json'));
  const date = new Date('2026-10-31T16:01:00Z'); // November 1 in Perth
  const first = generate({ root, date });
  assert.equal(first.length, 2);
  assert.ok(first.every(file => file.includes('November-1')));
  assert.match(fs.readFileSync(first[0], 'utf8'), /Learn New Concept/);
  assert.match(fs.readFileSync(first[1], 'utf8'), /System Design Challenge/);
  assert.match(fs.readFileSync(first[0], 'utf8'), /## Reading/);
  assert.match(fs.readFileSync(first[1], 'utf8'), /Original practice scenario/);
  fs.appendFileSync(first[0], '\nMy notes\n');
  const tracker = fs.readFileSync(path.join(root, 'learning-tracker.json'), 'utf8');
  assert.deepEqual(generate({ root, date }), []);
  assert.equal(fs.readFileSync(path.join(root, 'learning-tracker.json'), 'utf8'), tracker);
  assert.match(fs.readFileSync(first[0], 'utf8'), /My notes/);
  // A partial day creates only the missing track, without advancing the other.
  const next = new Date('2026-11-02T00:00:00Z');
  const partial = first[0].replaceAll('November-1', 'November-2');
  fs.mkdirSync(path.dirname(partial), { recursive: true });
  fs.writeFileSync(partial, 'Existing work');
  assert.equal(generate({ root, date: next }).length, 1);
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(root, 'learning-tracker.json'))), { concepts: 1, systemDesign: 2 });
  for (let i = 3; i <= 30; i++) generate({ root, date: new Date(`2026-11-${String(i).padStart(2, '0')}T00:00:00Z`) });
  assert.ok(fs.existsSync(path.join(root, 'System-Design/2026/November/Week 5/November-30/README.md')));
  assert.equal(fs.existsSync(path.join(root, 'DSA')), false);
  const db = JSON.parse(fs.readFileSync(path.join(root, 'learning-database.json')));
  const trackerPath = path.join(root, 'learning-tracker.json');
  const end = { concepts: db.concepts.length, systemDesign: db.systemDesign.length };
  fs.writeFileSync(trackerPath, JSON.stringify(end));
  const exhaustedDate = new Date('2026-12-01T00:00:00Z');
  assert.throws(() => generate({ root, date: exhaustedDate }), /Curriculum exhausted/);
  assert.equal(fs.existsSync(path.join(root, 'Learn-New-Concept/2026/December')), false);
  assert.deepEqual(JSON.parse(fs.readFileSync(trackerPath)), end);
  // One exhausted track must also block writes to the non-exhausted track.
  fs.writeFileSync(trackerPath, JSON.stringify({ concepts: 0, systemDesign: db.systemDesign.length }));
  assert.throws(() => generate({ root, date: exhaustedDate }), /Curriculum exhausted/);
  assert.equal(fs.existsSync(path.join(root, 'Learn-New-Concept/2026/December')), false);
  // Appending content resumes at the next position without resetting progress.
  for (const key of ['concepts', 'systemDesign']) {
    db[key].push({ ...db[key][0], id: key + '-extra', title: 'New appended topic' });
  }
  fs.writeFileSync(path.join(root, 'learning-database.json'), JSON.stringify(db));
  fs.writeFileSync(trackerPath, JSON.stringify(end));
  const resumed = generate({ root, date: exhaustedDate });
  assert.equal(resumed.length, 2);
  assert.match(fs.readFileSync(resumed[0], 'utf8'), /New appended topic/);
  db.concepts = [];
  fs.writeFileSync(path.join(root, 'learning-database.json'), JSON.stringify(db));
  assert.throws(() => generate({ root, date: new Date('2026-12-01T00:00:00Z') }), /Empty track/);
  console.log('Passed: two tracks, Perth dates, reruns, note preservation, partial days, source links, exhaustion, extension, week 5, and validation.');
} finally { fs.rmSync(root, { recursive: true, force: true }); }
