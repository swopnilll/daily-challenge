# System Design Challenge: Stripe timed out

Date: November 1, 2026 (Australia/Perth)

Checkout calls Stripe inside a database transaction. The request times out, but the payment may have succeeded. Spend 10–15 minutes on a quick redesign.

## Reading

[Stripe: Idempotent requests](https://docs.stripe.com/api/idempotent_requests)

Focus: Idempotency keys. Read the relevant section, not the whole article.

Original practice scenario informed by the linked resource; not a question quoted from its publisher.

## Your tasks

- [ ] Identify the exact failure in this flow.
- [ ] Separate local state changes from the external payment call and keep one key per payment attempt.
- [ ] Describe one retry or failure test that checks your redesign.

## Notes and solution

Write your explanation, examples, and decisions here.
