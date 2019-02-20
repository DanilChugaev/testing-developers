#!/bin/bash

ssh web@85.143.223.101 'cd /home/web/www/testing-developers/ && npm ci && npm start && cd client && npm ci && npm start'
