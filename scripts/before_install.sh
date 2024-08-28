#!/bin/bash

#create a new directory for the app if it doesn't exist

DIR="/home/ubuntu/nodeapp"
if [ -d "$DIR" ]; then
  echo "Directory $DIR exists."
else
  echo "Error: Directory $DIR does not exist."
  mkdir $DIR
  echo "Directory $DIR created."
fi