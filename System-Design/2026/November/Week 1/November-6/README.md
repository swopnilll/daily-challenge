# System Design Challenge: Shipping quote hangs

Date: November 6, 2026 (Australia/Perth)

A shipping quote call stalls and holds an API request open for 40 seconds. Spend 10–15 minutes on a quick redesign.

## Reading

[Amazon Builders’ Library: Timeouts and backoff](https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/)

Focus: Connection and request timeouts. Read the relevant section, not the whole article.

Original practice scenario informed by the linked resource; not a question quoted from its publisher.

## Your tasks

- [ ] Identify the exact failure in this flow.
- [ ] Set a bounded wait and define the user-visible failure response.
- [ ] Describe one retry or failure test that checks your redesign.

## Notes and solution

Write your explanation, examples, and decisions here.
