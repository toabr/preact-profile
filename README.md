# preact material app

Super performant `Material` app for preact world using [preact-material-components](https://github.com/prateekbh/preact-material-components)

## installation

npm install -g preact-cli

preact create material portfolio

cd portfolio

npm install --save-dev node-sass sass-loader

found 5 vulnerabilities (2 low, 2 moderate, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details

npm install --save-dev sass-loader@7.1.0

mv src/style/index.css src/style/index.scss

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

## design

https://github.com/preactjs/preact-cli#official-templates

https://github.com/preactjs-templates/material

https://www.material.io/

https://github.com/material-components/material-components-web

## buglogg

You can't have a focus-trap without at least one focusable element
<Drawer.DrawerItem selected={props.selectedRoute === '/'} onClick={this.goHome} tabindex={0}>