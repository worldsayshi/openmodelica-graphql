#!/bin/bash
set -e
function abs_path { echo $(cd $(dirname $1); pwd)/$(basename $1); }
#name_with_ext=${1##*/}
#name=${name_with_ext%.mo}
apath=$(abs_path $1)
name_with_ext=${1##*/}
mkdir -p output
cd output
omc +s $apath
make -f ${name_with_ext%.mo}.makefile
