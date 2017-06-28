A sample single-page app that uses [rollup.js](https://rollupjs.org/) as the module bundler.


### Goals

- Keep the tool chain super simple and fast (eg. no babel or webpack)
- Keep the dependencies as low as possible, but still have understandable/productive code


### How to use

```shell
brew install node                     # node.js v8
brew install watchexec                # watch for file changes

npm run dev
open "http://localhost:8080"
```


### Notes

I would like the build system to be faster and not use javascript for this, but for the sake of simplicity I just used node. Ideally I would use: a Make file and/or [shikensu](https://github.com/icidasset/shikensu). I'd also prefer not to use `rollup-plugin-commonjs`, but most of the npm packages are written in CommonJS format, so that's that.
