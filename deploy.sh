#!/bin/bash
sudo apt-get install lftp
lftp -c "open -u $FTP_USER,$FTP_PASS $FTP_HOST; set ssl:verify-certificate no; mirror -R ./ ~/public_html"