# Data Share

A simple way to share links. It just replaces your `href` and `taget` attributes.
It depends on jQuery.

## Support

- [X] Facebook `data-share-facebook`
- [X] Twitter `data-share-twitter`
- [X] Google Plus `data-share-plus`
- [X] Linkedin `data-share-linkedin`

## Installation

`npm install data-share`

## Usage

In your JS file, just require it:

````javascript
require('data-share')
```

Then, in your HTML, use the `data-share-{media}` attribute.

```html
<a href="#" data-share-facebook>Share on facebook</a>
```

Through this attribute you can also pass options in JSON:

```html
<a href="#" data-share-linkedin='{"title": "Crazy title"}'>Share on Linkedin</a>
```

## Defaults

```javascript
var defaults = {
  url: window.location.href,
  target: '_blank',
  title: '',
  source: '',
  summary: ''
}
```
