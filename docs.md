### API Documentation

**\***GET profile\*\*

error:
profile:
addresses: [
{
address_id:
address_line_1:
address_line_2: null
address_line_3: null
country:
created_on:
email: null
first_name: null
is_default: bool
last_name: null
locality: (city)
middle_name: null
phone_num: null
postal_code:
region: "TX" (state code)
type: "ADDRESS_TYPE_SHIPPING"
updated_on:
}
]
default_billing_address: null
default_email: id string
default_payment_method: null
default_phone_number: null
default_shipping_address: address_id
emails: [
{
address:
email_id:
is_default: bool
is_verified: null
}
]
is_app_authorized: null
is_bootstrap: false
payment_methods: [
{
id:
type: "card"
user_id: null
card: {
brand:
card_cvc: null
cardholder_name:
exp_month:
exp_year:
id: null?
is_giftcard: false
last_4: 3000
zip_code:
}
}
]
phone_numbers: null
preferred_auth_methods: null
roles: null
user: {
app_ids: null
created_on: unix
date_of_birth: null
first_name:
gender: null
last_name: null
locked_till: null
middle_name: null
tags: null
updated_on: unix
user_id:
}
}

GET sessions

error: null
sessions: {
active_sessions: [
{
active: bool
browser_type:
created_on: unix
device:
email:
expiry: unix
id:
last_updated_on:
metadata: "tyler@tyler.com"
user_agent:
user_id:
}
]
current_session_id:
}

Objects / Models:

Address

id:
address_line_1: string
address_line_2: string
address_line_3: null
country: string
created_on: timestamptz
is_default: boolean
locality: string
postal_code: string
region: string ("TX")
type: string "ADDRESS_TYPE_SHIPPING"
updated_on: timestamptz

Card

brand:
card_cvc: null
cardholder_name:
exp_month:
exp_year:
id: null?
is_giftcard: false
last_4: 3000
zip_code:

Email

id:
address: string
is_default: boolean
is_verified: boolean

Payment Method
has one card

id:
type: string "card"
user_id: null
card: association

Profile
has many addresses
has many emails
has many payment methods
has one user

addresses: has many address
 default_billing_address: string address_id (null)
 default_email: email_id
 default_payment_method: payment_method_id (null)
 default_shipping_address: address_id
 emails: has many email
 is_app_authorized: boolean null
 is_bootstrap: boolean false
 payment_methods: has many payment_method
 phone_numbers: null
 preferred_auth_methods: null
 roles: null
 user: has one user

Session
belongs to user

active: boolean
browser_type: string
created_on: timestamptz
device: string
email: string
expiry: timestamptz
id:
last_updated_on: timestamptz
user_agent: string
user_id: user_id

**User**
belongs to profile

id:
 app_ids: null
 created_on: timestamptz
 date_of_birth: string
 first_name: string
 gender: string
 last_name: string
 locked_till: timestamptz
 middle_name: string
 updated_on: timestamptz
 id:
