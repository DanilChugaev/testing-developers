#!/bin/bash

npm install
NODE_ENV=production babel-node src/index.js
