---
layout: layouts/getting_started.njk
title: Introduction
post_title: Digital Banking with Deposits
showRightNav: true
tags: ["docs", "getting_started"]
eleventyNavigation:
  key: Introduction
  parent: "Getting Started"
  order: 4
---

You want to build a digital bank, grow a tech business, and hit your revenue
goals.

Your users want a stress-free movement of money for personal or business
reasons. They also want a list of benefits too:

- 24/7 access to money in the account, with full financial visibility
- Ability to operate the account at any time, from any place, on the go
- Great UI/UX/CX.
- No fees for spending or transferring money abroad
- Beyond average fraud and identity protection.

At Deposits, we provide world-class banking infrastructure for our clients. We
take care of the heavy lifting for you so you can focus on creating a product
that delights your users.

Traditional banking already offers a shortlist of functions, but currently
lacks the benefits to match the tastes and use cases modern banking customers
expect.

This is where your partnership with Deposits becomes the leverage you can bank
on.

**What do you need to launch and operate a Bank these days:**

- Banking licenses coverage
- KYC / AML &amp; Fraud prevention
- Ledgers and reconciliation
- Secure datastore
- Partnerships
- Web / iOS / Android applications
- Payment gateway
- Dedicated technical support

With Deposits, partners can go live faster than ever before by leveraging our
3rd party licenses, certifications, microservices, and API infrastructure. Our
API
[documentation](https://docs.deposits.dev/)
is here to help you get from A to B in no time at all.

## Building your bank

<img
    src="https://1603381330-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Mctw3M_RZOCGzqZkID_-4045043681%2Fuploads%2FRQE6gapxweDWU1aUTQQC%2FImage%20from%20iOS%20(2).jpg?alt=media&token=500b6f68-3599-400d-884f-715894047385"
    alt="diagram showing building your bank with deposits"
  />

### Creating and Verifying your Customers

The first thing you would want to do when you are opening a bank account for
an individual or business would be to create a new customer. These customers
could either be individual users or businesses. The steps taken to open
accounts for these different types of customers would vary. Let&apos;s start
with opening an account for an individual.

### Creating an Account for an Individual

To create an account for an individual, you need to collect basic information
such as their first and last names, email address, and physical address of the
user. These are the fields required to have on a user. They are also needed to
create a user with us.

Our API documentation provides the necessary information needed to create a
new user. After you create a new user, a lot of information is returned and a
response similar to this is returned:

```json
{
  "status": "success",
  "message": "Account created successful.",
  "data": {
    "user": {
      "first_name": "Fred",
      "last_name": "Williams",
      "username": "f_williams",
      "email": "customer@email.com",
      "id": 612
    },
    "wallet": 0
  }
}
```

### Creating an Account for a Business

Understandably, more information is needed to create an account for a business
than is needed for an individual. You would need

The name of the business
Business address
Date of incorporation
means of identifying this business as a legal entity.

The methods of verification that are currently supported are DUNS and Employer
Identification Number (EIN).

### Verifying your Customers

In banking, it&apos;s important to verify the identities of individuals and
ensure that these customers are who they say they are.

To help with this, we have a standalone product, KYSync.

KYSync allows you to pass the information you have previously collected from
your customer and run a couple of checks on that customer to verify their
identity.

This system of verification is currently only available within the US. To
verify a user, you would need their Social Security Number (SSN) alongside
their base information.

This information is then passed across to KYSync and a response is received
showing if the customer is who they say they are or not.

The time taken to verify customers varies depending on the type of entity.

To verify an individual, you can call this endpoint. You will get a response
similar to this:

```json
{
  "status": "success",
  "message": "Account created successful.",
  "data": {
    "user": {
      "first_name": "Fred",
      "last_name": "Williams",
      "username": "f_williams",
      "email": "customer@email.com",
      "id": 612
    },
    "wallet": 0
  }
}
```

## Storing value

The way value is stored is through wallets. Deposits automatically creates a
ledger for each new user upon creation. The balance in the user&apos;s account
is stored in a wallet and the transaction history is readily available for the
individuals to upon request.

## Collecting Payments

There are various ways you can receive payments from users on the platform.
They include:

- Via Deposits Payment Pages
- Via Bank Account
- Via Card

### via Deposits Payment pages

Our payment pages automatically generate invoices and allow you receive
payments. This is the recommended way to get payments from users. You can
create a payment page by calling this endpoint.

A sample body passed along with the request would look like:

```json
{
  "api_key": "KwjqFjcvQxUHczQJ",
  "user_id": "34521",
  "name": "Swift Technologies",
  "description": "Get the very best technology at swift technologies",
  "items": [
    {
      "name": "msi Optix AG32CQ",
      "description": "msi 32in curved monitor",
      "amount": 450.0,
      "quantity": 1
    }
  ]
}
```

This will return a response similar to this:

```json
{
  "status": "success",
  "message": "Payment Page saved",
  "data": {
    "id": 7,
    "client_id": "7",
    "user_id": "34521",
    "name": "Swift Technologies",
    "description": "Get the very best technology at swift technologies",
    "amount": 450.0,
    "paid_at": null,
    "extra_info": null,
    "payment_type": null,
    "payment_interval": null,
    "payment_key": "a306248c72ce4ad",
    "total": "450.00",
    "status": "active",
    "created_at": "2021-08-25T14:33:08.000000Z",
    "updated_at": "2021-08-25T14:33:08.000000Z",
    "link": "https://api.deposits.dev/payment_page/cafecito/88497ae7d640e5a",
    "items": [
      {
        "id": 9,
        "client_id": "7",
        "payment_page_id": "7",
        "name": "msi Optix AG32CQ",
        "description": "msi 32in curved monitor",
        "amount": "450.00",
        "quantity": "1",
        "status": "active",
        "created_at": "2021-08-25T14:33:08.000000Z",
        "updated_at": "2021-08-25T14:33:08.000000Z"
      }
    ]
  }
}
```

### via Bank Account

You may initiate a request to debit a bank account. If this is successful, the
user who initiated the request would have their wallet topped up with the
amount passed in.

### via Card

You may initiate a request to debit a card account. If this is successful, the
user who initiated the request would have their wallet topped up with the
amount passed in.
