# Daily Learning and System Design

Every day, generate two practical exercises:

1. **Learn New Concept** — explore an engineering concept through explanations and a small hands-on task (20–30 minutes).
2. **System Design Challenge** — fix one concrete failure in an existing application with a quick redesign (10–15 minutes).

## Daily practice

Open both dated Markdown files, complete the checkboxes, and write your notes or design below the prompts. Add diagrams or code alongside them when useful.

```text
Learn-New-Concept/2026/November/Week 1/November-1/README.md
System-Design/2026/November/Week 1/November-1/README.md
```

Weeks are days 1–7, 8–14, 15–21, 22–28, and 29–31. Dates use **Australia/Perth** regardless of the machine timezone.

## Automation

GitHub Actions runs at **00:00 UTC / 08:00 Perth** daily. In Actions, select **Daily Learning and System Design**, then **Run workflow** for a manual run. Scheduled runs use the default branch.

```bash
node generate-daily-question.js
node test-generate-questions.js
```

The generator uses a curated local bank, requires no AI API or dependencies, and creates one exercise per track per day. Repeating a run preserves existing notes and does not advance completed tracks. A partially generated day creates only the missing exercise. Missed days are not backfilled automatically.

## Topics and progression

`learning-database.json` contains 12 concepts and 12 small system design scenarios covering backend development, databases, security, cloud, and reliability. Each track advances independently through `learning-tracker.json` and cycles after all entries are used. Add entries with `title`, `brief`, and a non-empty `tasks` array to extend the curriculum.

Each system design exercise focuses on one bug or failure, such as a Stripe call inside a database transaction, a duplicate webhook, or double booking. Answer with a few bullets or short pseudocode: what breaks, the smallest useful redesign, and how a retry or failure behaves. Full architecture designs and capacity estimates are not required.

## Existing algorithm practice

Algorithm challenge generation has been removed. Existing `DSA/` files and the old question database/tracker remain as historical material; the active workflow does not read or update them. The old algorithm test fixture has been removed.

## Verification

Tests run in a temporary directory and check both tracks, Perth dates, repeat runs, preservation of notes, partial days, topic cycling, month week boundaries, and invalid empty tracks. They do not modify your practice files.
