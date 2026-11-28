# System Design Challenge: Cancelled arrives before created

Date: November 28, 2026 (Australia/Perth)

Two relays publish order events in a different order from the database updates. Spend 10–15 minutes on a quick redesign.

## Reading

[AWS Prescriptive Guidance: Transactional outbox](https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html)

Focus: Outbox ordering. Read the relevant section, not the whole article.

Original practice scenario informed by the linked resource; not a question quoted from its publisher.

## Your tasks

- [ ] Identify the exact failure in this flow.
- [ ] Preserve relevant ordering or reject stale state transitions.
- [ ] Describe one retry or failure test that checks your redesign.

## Notes and solution

Write your explanation, examples, and decisions here.
