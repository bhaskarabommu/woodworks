#!/bin/bash

#variables
DIR="/var/www/html"

# check if apache2 is installed and running

if ! systemctl is-active --quiet apache2; then
        echo "apache2 is not running"
                apt update
                apt -get install apache2 -y
                systemctl start apache2
                systemctl enable apache2
        else
                echo "apache is running"
fi

#deploy code

echo $PWD
cp -r $PWD/* $DIR