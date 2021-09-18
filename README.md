# Configuration

A boilerplate react typescript installation with `tailwind css` ,`twin.macro` ,`styled-components` and `craco`. This set up use `yarn package`

## Create React application

Create a new react application template typescript

```jsx
  npx create-react-app my-app template=typescript
```

## Install Tailwind css

```jsx
yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

> Create react app doesn't support PostCSS 8 yet you need to install the Tailwind CSS v2.0 PostCss 7

### Create Tailwindcss configuration file

Next, generate your `tailwind.config.js`file:

```jsx
  npx tailwindcss-cli@latest init
```

This will create a minimal `tailwind.config.js` file at the **_root_** your project.

```jsx
// tailwind.config.js
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
```

Read a separate guide about [optimizing for production](https://tailwindcss.com/docs/optimizing-for-production) to learn more about tree-shaking unused styles for best performance.

### Include Tailwind in your CSS

The styled is stored on **_./src/assets/tailwind.css_**. Contain all directive to Tailwind's. This file is imported to `index.tsx` for setting up

## Install and configure CRACO

```jsx
  yarn add @craco/craco
```

### Update package.json

```jsx
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test"
  }
```

Now create a configuration file `craco.config.js`.

```jsx
// craco.config.js
module.exports = {
	style: {
		postcss: {
			plugins: [require('tailwindcss'), require('autoprefixer')],
		},
	},
};
```

## Babel

For enable twin.macro need to include `babelMacros` to **_package.json_**

```jsx
"babelMacros": {
    "twin": {
      "config": "./tailwind.config.js",
      "preset": "styled-components"
    }
  }
```

## styled-components

```jsx
  yarn add styled-components
```

## Twin.macro set up

```jsx
  yarn add twin.macro
```

Runs the app in the development mode.\

### `yarn start`
