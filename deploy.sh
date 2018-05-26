#!/bin/bash

message="build`date +%F_%H:%M:%S:%N`"

mvn clean install &&
cp -v ./webapp/target/donkey-webapp.war ../donkeyDemo/. &&
cd ../donkeyDemo/ &&
git add -A &&
git commit -m $message &&
git push heroku master &&
echo "Heroku master pushed, Sir. What a beautiful day!"