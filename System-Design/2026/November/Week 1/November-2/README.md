# System Design Challenge: Order saved, email lost

Date: November 2, 2026 (Australia/Perth)

An order commits successfully, then the process crashes before sending its confirmation email. Spend 10–15 minutes on a quick redesign.

## Reading

[AWS Prescriptive Guidance: Transactional outbox](https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html)

Focus: Atomic database writes and external effects. Read the relevant section, not the whole article.

Original practice scenario informed by the linked resource; not a question quoted from its publisher.

## Your tasks

- [ ] Identify the exact failure in this flow.
- [ ] Persist the intent to send alongside the order.
- [ ] Describe one retry or failure test that checks your redesign.

## Notes and solution

Write your explanation, examples, and decisions here.
