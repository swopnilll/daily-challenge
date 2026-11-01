# Daily Learning and System Design

Every day, generate two practical exercises:

1. **Learn New Concept** — explore an engineering concept through explanations and a small hands-on task (10–15 minutes).
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

`learning-database.json` contains **30 concepts and 30 paired small design exercises**. Each daily file links to an established resource, identifies the specific reading focus, and gives at most three tasks. Sources include Amazon Builders’ Library, AWS Prescriptive Guidance, Stripe documentation, PostgreSQL documentation, and MDN. Prompts are original exercises informed by those sources, not questions supplied by their publishers.

Each track advances independently through `learning-tracker.json`. Day 13 moves to entry 13. **Topics never cycle automatically.** Once an unfinished track exhausts its bank, generation fails with a clear message before writing either new exercise. GitHub Actions shows the failure in its run and summary. Previously generated notes remain intact.

This is a curated backlog, not a live feed or automatic AI generator. Extend it before exhaustion by appending entries with a unique `id`, `title`, `brief`, one to three `tasks`, and `source` containing `title`, `url`, and `focus`. Keep existing entries in order because the tracker stores positions. Existing progress is preserved; these positions now refer to the new curriculum. Generation records assigned exercises, not whether you have finished answering them.

Each system design exercise focuses on one failure, such as a timed-out Stripe call or a duplicate webhook. Answer in a few bullets or short pseudocode. No capacity estimates or full architecture design are required.

## Existing algorithm practice

Algorithm challenge generation has been removed. Existing `DSA/` files and the old question database/tracker remain as historical material; the active workflow does not read or update them. The old algorithm test fixture has been removed.

## Verification

Tests run in a temporary directory and check both tracks, Perth dates, repeat runs, preservation of notes, partial days, curriculum exhaustion and source attribution, month week boundaries, and invalid empty tracks. They do not modify your practice files.
