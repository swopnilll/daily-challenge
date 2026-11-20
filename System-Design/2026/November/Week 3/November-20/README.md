# System Design Challenge: Duplicate optional identifiers

Date: November 20, 2026 (Australia/Perth)

A team expects a unique nullable external ID column to forbid multiple rows with no ID. Its assumptions do not match the database behavior. Spend 10–15 minutes on a quick redesign.

## Reading

[PostgreSQL: Constraints](https://www.postgresql.org/docs/current/ddl-constraints.html)

Focus: Nulls and uniqueness. Read the relevant section, not the whole article.

Original practice scenario informed by the linked resource; not a question quoted from its publisher.

## Your tasks

- [ ] Identify the exact failure in this flow.
- [ ] Choose and document the intended treatment of missing IDs.
- [ ] Describe one retry or failure test that checks your redesign.

## Notes and solution

Write your explanation, examples, and decisions here.
