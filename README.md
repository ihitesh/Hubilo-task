# Hubilo

Keeping Posts data in redux because when we create a new post, our API does not store that in database, so when we get all posts data again, we will not get posts created by us (If we keep it in local state).

Keeping Albums in redux because data from API is constant, it is not changing.

So keeping that in mind, when we go to some other pages and return to Albums again, we will not have to call api again.

Same goes for Users and Todos Data
