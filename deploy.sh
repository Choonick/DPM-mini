npm run build
aws s3 cp ./dist s3://weather-web --recursive --acl public-read

