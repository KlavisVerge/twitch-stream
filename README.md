# twitch-stream

polymer build
aws s3 sync ./build/default s3://apis-for-all/twitch-stream --acl public-read --exclude ".git/*"