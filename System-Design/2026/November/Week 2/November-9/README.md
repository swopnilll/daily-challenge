# System Design Challenge: A comment has no post

Date: November 9, 2026 (Australia/Perth)

Deleting a post leaves comment rows that refer to its missing ID. Spend 10–15 minutes on a quick redesign.

## Reading

[PostgreSQL: Constraints](https://www.postgresql.org/docs/current/ddl-constraints.html)

Focus: Foreign keys. Read the relevant section, not the whole article.

Original practice scenario informed by the linked resource; not a question quoted from its publisher.

## Your tasks

- [ ] Identify the exact failure in this flow.
- [ ] Choose a deletion policy and enforce the relationship.
- [ ] Describe one retry or failure test that checks your redesign.

## Notes and solution

Write your explanation, examples, and decisions here.
