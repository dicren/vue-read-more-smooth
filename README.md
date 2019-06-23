# vue-read-more-smooth

[![license](https://img.shields.io/github/license/dicren/vue-read-more-smooth.svg?style=flat-square)](./LICENSE)
[![vue 2](https://img.shields.io/badge/vue-2-42b983.svg?style=flat-square)](https://vuejs.org)
[![npm](https://img.shields.io/npm/v/vue-read-more-smooth.svg?style=flat-square)](https://www.npmjs.com/package/vue-read-more-smooth)
[![npm](https://img.shields.io/npm/dt/vue-read-more-smooth.svg?style=flat-square)](https://www.npmjs.com/package/vue-read-more-smooth)



"Read more" button with animation and easy usage for vuejs.

## Install

Via [npm](https://www.npmjs.com/):

[![npm](https://nodei.co/npm/vue-read-more-smooth.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/vue-read-more-smooth)

```🚀sh
npm install vue-read-more-smooth --save
```
Via [Yarn](https://yarnpkg.com/):

```sh
yarn add vue-read-more-smooth
```

## Demo & examples
Go to https://dicren.github.io/vue-read-more-smooth/

## Usage

```jsx
<template>
  <VueReadMoreSmooth>
    <p>Lorem Ipsum</p>
  </VueReadMoreSmooth>
</template>
<script>
  import VueReadMoreSmooth from "vue-read-more-smooth";
  export default {
    name: "app",
    components: { VueReadMoreSmooth }
  }
</script>
```

## Properties

 |  Property  |  Type  |  Default  |  Description  | 
 |  -  |  :-:  |  :-:  |  -  | 
 |  :lines  | number | `3`  |  Number of lines to show before the read more button. | 
 |  :g-lines | number | `2` |  Shadow's size. If lines is greather than 12, g-lines default value is 4, if lines is grather than 6, g-lines default value is 3
 |  :max-lines | number | `lines + 1` |  If your text has less than max-lines, the container acts as a normal div.
 |  :text | string | `Read more` |  obvious
 |  :text-less | string | `Read less` |  obvious
 |  :no-less | boolean | `true` |  if is false button disapear after click read more
 |  :open-by-default | boolean | `false` |  show all text by default
 

## License

[MIT](LICENSE)

---
⌨️ with ❤️ by [dicren](https://github.com/dicren)
