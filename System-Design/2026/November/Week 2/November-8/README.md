# System Design Challenge: Paid becomes pending

Date: November 8, 2026 (Australia/Perth)

A delayed older webhook changes an already paid order back to pending. Spend 10–15 minutes on a quick redesign.

## Reading

[Stripe: Webhooks](https://docs.stripe.com/webhooks)

Focus: Webhook event ordering. Read the relevant section, not the whole article.

Original practice scenario informed by the linked resource; not a question quoted from its publisher.

## Your tasks

- [ ] Identify the exact failure in this flow.
- [ ] Prevent stale events from regressing the order status.
- [ ] Describe one retry or failure test that checks your redesign.

## Notes and solution

Write your explanation, examples, and decisions here.
