#!/bin/bash

rm -rf node_modules/ && npm install && NODE_ENV=production babel-node src/index.js
