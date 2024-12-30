@echo off
set SERVER_IP=185.211.170.66
set USER=root

echo Deleting old build from server...
ssh %USER%@%SERVER_IP% "rm -rf /var/www/html/*"

echo Uploading new build to server...
scp -r build/* %USER%@%SERVER_IP%:/var/www/html

echo Build uploaded successfully!
pause
