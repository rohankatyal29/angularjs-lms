#!/usr/bin/env bash

echo ">>> Creating 'vagrant' Symlinks .."
ln -s lib/vagrant/Vagrantfile Vagrantfile

echo ">>> Creating 'grunt' Symlinks .."
ln -s lib/grunt/Gruntfile.js Gruntfile.js