#!/bin/sh

for file in less/*.less 
    do lessc "$file" > "${file//less/css}"
done
