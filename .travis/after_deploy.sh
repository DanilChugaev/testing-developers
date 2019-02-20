#!/bin/bash

ssh web@85.143.223.101 'cd /home/web/www/testing-developers/ && rm -rf node_modules/ && npm i && npm start && cd client && rm -rf node_modules/ && npm i && npm start'
