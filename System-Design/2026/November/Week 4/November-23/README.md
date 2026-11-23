# System Design Challenge: Slow webhook keeps returning errors

Date: November 23, 2026 (Australia/Perth)

A webhook waits for email delivery before responding; provider retries create a growing backlog. Spend 10–15 minutes on a quick redesign.

## Reading

[Stripe: Webhooks](https://docs.stripe.com/webhooks)

Focus: Fast webhook acknowledgement. Read the relevant section, not the whole article.

Original practice scenario informed by the linked resource; not a question quoted from its publisher.

## Your tasks

- [ ] Identify the exact failure in this flow.
- [ ] Persist accepted work durably and respond before slow processing.
- [ ] Describe one retry or failure test that checks your redesign.

## Notes and solution

Write your explanation, examples, and decisions here.
