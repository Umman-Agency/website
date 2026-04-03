function copy-build {
  rsync -r -e "ssh -p $SSH_PORT" ./public/build/ $SSH_USERNAME@$SSH_HOST:/home/$SSH_USERNAME/domains/$WEBSITE_FOLDER/public/build/
}

function copy-full-public {
  rsync -r -e "ssh -p $SSH_PORT" ./public/ $SSH_USERNAME@$SSH_HOST:/home/$SSH_USERNAME/domains/$WEBSITE_FOLDER/public/
}