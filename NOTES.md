# Development Notes

## Workflows & Dependencies

For the Github Action, we will be using:
``` YAML

       - name: Setup PHP
         uses: shivammathur/setup-php@v2

       - name: Download Built Assets
         uses: actions/download-artifact@v4

       - name: Deploy to Hostinger Server
         uses: appleboy/ssh-action@master
```

How to use appleboy/ssh-action@master?

Here the keywords, in case something is not clear:`https://github.com/appleboy/ssh-action/tree/master/?tab=readme-ov-file#-connection-settings`


### Varialbes & Secrets

Context configuration

Variables for:

host connection

SSH_FILE_NAME
SSH_PRIVATE_KEY
SSH_HOST
SSH_PORT
SSH_USERNAME

WEBSITE_FOLDER

code configuraiton

BRANCH

tools configuration

NODE_VERSION
PHP_VERSION

### Artifacts

The default path is `public/build` and the days of retention `1`




