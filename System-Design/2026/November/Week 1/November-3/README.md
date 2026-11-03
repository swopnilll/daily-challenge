# System Design Challenge: Account credited twice

Date: November 3, 2026 (Australia/Perth)

The same payment webhook is delivered twice and both handlers add credit. Spend 10–15 minutes on a quick redesign.

## Reading

[Stripe: Webhooks](https://docs.stripe.com/webhooks)

Focus: Duplicate event handling. Read the relevant section, not the whole article.

Original practice scenario informed by the linked resource; not a question quoted from its publisher.

## Your tasks

- [ ] Identify the exact failure in this flow.
- [ ] Make event recording and the local balance update atomic.
- [ ] Describe one retry or failure test that checks your redesign.

## Notes and solution

Write your explanation, examples, and decisions here.
