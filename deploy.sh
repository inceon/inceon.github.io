#!/bin/bash
abort() {
    local message=$1
    echo $message
    exit -1
}
[ -z $FTP_PASS ] && abort "FTP_PASS is undefined"
[ -z $FTP_USER ] && abort "FTP_USER is undefined"
[ -z $FTP_HOST ] && abort "FTP_HOST is undefined"
lftp -u $FTP_USER,$FTP_PASS $FTP_HOST \
 -e 'mirror -c -e -R dist public_html ; exit'