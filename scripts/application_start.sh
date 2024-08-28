#!/bin/bash
# Strart the application

# give permission to execute to npm install
sudo chmod +x /home/ubuntu/nodeapp/scripts/application_start.sh

# navigate to the app directory
cd /home/ubuntu/nodeapp

# install npm packages
npm install

# start our node app in the background
npm start > app.out.log 2> app.err.log < /dev/null &