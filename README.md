##SvelteBase
Live preview: [sveltebase.com](https://sveltebase.com)

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

# Usage
* Update .firebaserc
* Update robots.txt
* Update manifest.json
* Change favicon
* Update env.js

# Local
* Go to _config/README.md
* Add src/_local folder
* Add component into workplace.config
```
<component name="RunManager" selected="Node.js.cli.js">
	 <configuration name="cli.js" type="NodeJSConfigurationType" application-parameters="dev --live=false" nameIsGenerated="true" path-to-js-file="node_modules/sapper/dist/cli.js" working-dir="$PROJECT_DIR$">
		 <method v="2" />
	 </configuration>
	 <configuration name="pre-build.js refresh-translation" type="NodeJSConfigurationType" application-parameters="refresh-translation" node-parameters="-r esm" path-to-js-file="src/_local/pre-build.js" working-dir="$PROJECT_DIR$">
		 <method v="2" />
	 </configuration>
	 <configuration name="pre-build.js translate" type="NodeJSConfigurationType" application-parameters="translate" node-parameters="-r esm" path-to-js-file="src/_local/pre-build.js" working-dir="$PROJECT_DIR$">
		 <method v="2" />
	 </configuration>
	 <configuration name="pre-build.js validate" type="NodeJSConfigurationType" application-parameters="validate" node-parameters="-r esm" path-to-js-file="src/_local/pre-build.js" working-dir="$PROJECT_DIR$">
		 <method v="2" />
	 </configuration>
	 <configuration name="sitemap_checker" type="NodeJSConfigurationType" node-parameters="-r esm" path-to-js-file="src/_local/sitemap_checker.js" working-dir="$PROJECT_DIR$">
		 <method v="2" />
	 </configuration>
	 <list>
		 <item itemvalue="Node.js.cli.js" />
		 <item itemvalue="Node.js.pre-build.js refresh-translation" />
		 <item itemvalue="Node.js.pre-build.js translate" />
		 <item itemvalue="Node.js.sitemap_checker" />
		 <item itemvalue="Node.js.pre-build.js validate" />
	 </list>
 </component>
```
