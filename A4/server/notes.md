Here ".env" file is missing, create your own such file and add security key into it,

You can generate security key in node terminal using these commands in terminal:
1. node
2. require('crypto').randomBytes(64).toString('hex')

Then add this security key to token signature.
