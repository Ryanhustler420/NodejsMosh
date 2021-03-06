# NPM  

- Every Node application has a package.json ﬁle that includes metadata about the application.
  This includes the name of the application, its version, dependencies, etc. 

- We use NPM to download and install 3rd-party packages from NPM registry:

- All the installed packages and their dependencies are stored under node_modules folders.
  This folder should be excluded from the  source control.

- Node packages follow semantic versioning: major.minor.patch - Useful NPM commands are:

```
=> Install a package npm i <packageName>

=> Install a speciﬁc version of a package npm i <packageName>@<version>

=> Install a package as a development dependency npm i <packageName> —save-dev

=> Uninstall a package npm un <packageName>

=> List installed packages npm list —depth=0

=> View outdated packages npm outdated

=> Update packages npm update

=> To install/uninstall packages globally, use -g ﬂag.

```
# How to use Semantic Versioning

The Reference is [here](https://docs.npmjs.com/getting-started/semantic-versioning).

- Patch releases: 1.0 or 1.0.x or ~1.0.4
- Minor releases: 1 or 1.x or ^1.0.4
- Major releases: * or x

# Listing the Installed Packages

```
$ npm list

$ npm list --depth=0
```
# Viewing Registry Info for a Package

```

$ npm view mongoose -> show package

===OR===

$ npm view mongoose dependencies -> only shows dependenies

{ async: '2.6.1',
  bson: '~1.0.5',
  kareem: '2.2.1',
  'lodash.get': '4.4.2',
  mongodb: '3.1.4',
  'mongodb-core': '3.1.3',
  'mongoose-legacy-pluralize': '1.0.2',
  mpath: '0.5.1',
  mquery: '3.2.0',
  ms: '2.0.0',
  'regexp-clone': '0.0.1',
  'safe-buffer': '5.1.2',
  sliced: '1.0.1' }


===OR===

$ npm view mongoose version

```



