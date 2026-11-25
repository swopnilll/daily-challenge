# System Design Challenge: Serialization retry sends two emails

Date: November 25, 2026 (Australia/Perth)

A transaction retry wrapper reruns a callback that also sends a receipt email. Spend 10–15 minutes on a quick redesign.

## Reading

[PostgreSQL: Transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html)

Focus: Transaction retry boundaries. Read the relevant section, not the whole article.

Original practice scenario informed by the linked resource; not a question quoted from its publisher.

## Your tasks

- [ ] Identify the exact failure in this flow.
- [ ] Keep external side effects outside retryable database work.
- [ ] Describe one retry or failure test that checks your redesign.

## Notes and solution

Write your explanation, examples, and decisions here.
