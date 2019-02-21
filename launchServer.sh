#!/bin/bash

rm -rf package-lock.json node_modules/
npm install
NODE_ENV=production babel-node src/index.js
