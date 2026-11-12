# System Design Challenge: Retry returns a confusing error

Date: November 12, 2026 (Australia/Perth)

The first create-order request succeeds but its response is lost. A retry only returns duplicate-order error. Spend 10–15 minutes on a quick redesign.

## Reading

[Amazon Builders’ Library: Safe retries](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/)

Focus: Idempotent response semantics. Read the relevant section, not the whole article.

Original practice scenario informed by the linked resource; not a question quoted from its publisher.

## Your tasks

- [ ] Identify the exact failure in this flow.
- [ ] Return the original result for the same logical request.
- [ ] Describe one retry or failure test that checks your redesign.

## Notes and solution

Write your explanation, examples, and decisions here.
