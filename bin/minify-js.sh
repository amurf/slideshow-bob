#!/bin/sh

cmd = closure-compiler --compilation_level=SIMPLE_OPTIMIZATIONS 

for file in js/*.js 
    do $cmd "$file" > "${file//.js/min.js}"
done
