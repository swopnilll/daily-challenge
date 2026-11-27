# System Design Challenge: Two clicks become two orders

Date: November 27, 2026 (Australia/Perth)

Two checkout requests arrive concurrently after a customer double-clicks. Spend 10–15 minutes on a quick redesign.

## Reading

[Amazon Builders’ Library: Safe retries](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/)

Focus: Client request identity. Read the relevant section, not the whole article.

Original practice scenario informed by the linked resource; not a question quoted from its publisher.

## Your tasks

- [ ] Identify the exact failure in this flow.
- [ ] Give the logical operation a stable identity and deduplicate on the server.
- [ ] Describe one retry or failure test that checks your redesign.

## Notes and solution

Write your explanation, examples, and decisions here.
