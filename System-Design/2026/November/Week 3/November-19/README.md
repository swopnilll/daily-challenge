# System Design Challenge: Both doctors go off duty

Date: November 19, 2026 (Australia/Perth)

Two concurrent requests each see another doctor on duty and remove their own doctor, leaving nobody on duty. Spend 10–15 minutes on a quick redesign.

## Reading

[PostgreSQL: Transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html)

Focus: Serializable transactions. Read the relevant section, not the whole article.

Original practice scenario informed by the linked resource; not a question quoted from its publisher.

## Your tasks

- [ ] Identify the exact failure in this flow.
- [ ] Preserve the cross-row invariant under concurrent requests.
- [ ] Describe one retry or failure test that checks your redesign.

## Notes and solution

Write your explanation, examples, and decisions here.
