sudo chown -R $(whoami) .git

find .git -type d -exec chmod 700 {} \;
find .git -type f -exec chmod 600 {} \;

