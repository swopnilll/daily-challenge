# System Design Challenge: A dead endpoint retries forever

Date: November 22, 2026 (Australia/Perth)

A background job keeps retrying a permanently invalid shipping address. Spend 10–15 minutes on a quick redesign.

## Reading

[Amazon Builders’ Library: Timeouts and backoff](https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/)

Focus: Bounded retry budgets. Read the relevant section, not the whole article.

Original practice scenario informed by the linked resource; not a question quoted from its publisher.

## Your tasks

- [ ] Identify the exact failure in this flow.
- [ ] Distinguish permanent failures from transient ones and bound retries.
- [ ] Describe one retry or failure test that checks your redesign.

## Notes and solution

Write your explanation, examples, and decisions here.
