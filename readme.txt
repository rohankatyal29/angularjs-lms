### What's included

<downloaded-package>
├── <html>          // Includes the static HTML version
├── <angular>       // Includes the static AngularJS version
├── <docs>          // Documentation
├── <lib>           // Various libraries used within the source
└── <src>           // Source

### Using Grunt and Bower

# Installing dependencies
# Within the root directory, run the following from your Terminal:

>npm install -g grunt-cli
>npm install
>bower install

# Building from source
# Generates asset bundles
>grunt build:d --theme html
>grunt build:d --theme angular

# Without minifying assets (for faster builds)
>grunt --min false build:d --theme html
>grunt --min false build:d --theme angular

# Generates separate asset modules
>grunt build:dm --theme html
>grunt build:dm --theme angular

# Starting the built-in BrowserSync web server and watchers
>grunt --theme html --min false
>grunt --theme angular --min false