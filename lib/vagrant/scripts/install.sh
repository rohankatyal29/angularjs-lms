#!/usr/bin/env bash

echo ">>> Installing DEV dependencies .."
cd /home/vagrant/tk
rvmsudo bundle install
sudo npm install
bower install --allow-root