# Lab 5 - Starter
Myat Thiha

1. No, because the “message” feature involves multiple components working together that includes typing input, sending data over a network, and updating the UI or server. These are integration-level behaviors and are harder to isolate in a unit test.

2. Yes, because checking the message length is a simple, self-contained logic that can be tested independently. A unit test can easily verify that messages longer than 80 characters are rejected and messages under that limit are allowed.
