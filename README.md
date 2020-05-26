### Node debug configuration

JavaScript file: ```node_modules\sapper\dist\cli.js``` \
Application parameters: ```dev```


### .firebase.json
Describes hosting config

### .firebaserc
Contains default target and target mappings for multi-site hosting setup

### package.json
Adjusted scripts mainly in order to copy sapper build to functions directory
NOTE: **windows** require a few node packages installed **globally**
```
npm install -g rimraf, mkdirp, ncp
# rimraf - remove directory, equivalent of rm -rf
# mkdirp - create directory, eq: mldir
# ncp - copy directory, eq: cp
```

souces: \
https://dev.to/eckhardtd/how-to-host-a-sapper-js-ssr-app-on-firebase-hmb