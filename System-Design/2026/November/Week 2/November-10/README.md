# System Design Challenge: Two reads disagree

Date: November 10, 2026 (Australia/Perth)

A request reads a report total twice inside a transaction and sees different values after another request commits. Spend 10–15 minutes on a quick redesign.

## Reading

[PostgreSQL: Transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html)

Focus: Read Committed snapshots. Read the relevant section, not the whole article.

Original practice scenario informed by the linked resource; not a question quoted from its publisher.

## Your tasks

- [ ] Identify the exact failure in this flow.
- [ ] Decide whether the report needs a stable snapshot.
- [ ] Describe one retry or failure test that checks your redesign.

## Notes and solution

Write your explanation, examples, and decisions here.
