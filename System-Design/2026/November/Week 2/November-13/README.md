# System Design Challenge: A key is reused for another amount

Date: November 13, 2026 (Australia/Perth)

The client accidentally sends the same payment key first with $20 and then with $50. Spend 10–15 minutes on a quick redesign.

## Reading

[Stripe: Idempotent requests](https://docs.stripe.com/api/idempotent_requests)

Focus: Idempotency key parameter checks. Read the relevant section, not the whole article.

Original practice scenario informed by the linked resource; not a question quoted from its publisher.

## Your tasks

- [ ] Identify the exact failure in this flow.
- [ ] Reject mismatched parameters rather than treating both requests as equivalent.
- [ ] Describe one retry or failure test that checks your redesign.

## Notes and solution

Write your explanation, examples, and decisions here.
