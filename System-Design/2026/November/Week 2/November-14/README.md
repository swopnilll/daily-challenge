# System Design Challenge: An event publishes twice

Date: November 14, 2026 (Australia/Perth)

A relay publishes an outbox event, then crashes before marking it sent. Spend 10–15 minutes on a quick redesign.

## Reading

[AWS Prescriptive Guidance: Transactional outbox](https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html)

Focus: Outbox relay duplicates. Read the relevant section, not the whole article.

Original practice scenario informed by the linked resource; not a question quoted from its publisher.

## Your tasks

- [ ] Identify the exact failure in this flow.
- [ ] Keep the consumer safe when the relay republishes.
- [ ] Describe one retry or failure test that checks your redesign.

## Notes and solution

Write your explanation, examples, and decisions here.
