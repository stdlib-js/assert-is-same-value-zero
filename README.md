<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isSameValueZero

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if two arguments are the same value.



<section class="usage">

## Usage

To use in Observable,

```javascript
isSameValueZero = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-same-value-zero@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var isSameValueZero = require( 'path/to/vendor/umd/assert-is-same-value-zero/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-same-value-zero@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.isSameValueZero;
})();
</script>
```

#### isSameValueZero( a, b )

Tests if two arguments `a` and `b` are the same value.

```javascript
var bool = isSameValueZero( false, false );
// returns true

bool = isSameValueZero( '', '' );
// returns true

bool = isSameValueZero( {}, {} );
// returns false
```

In contrast to the strict equality operator `===`, the function treats `NaNs` as the same value.

<!-- eslint-disable use-isnan -->

```javascript
var bool = ( NaN === NaN );
// returns false

bool = isSameValueZero( NaN, NaN );
// returns true
```

In contrast to the [SameValue Algorithm][@stdlib/assert/is-same-value], the function does **not** distinguish between `+0` and `-0`.

<!-- eslint-disable no-compare-neg-zero -->

```javascript
var bool = ( 0.0 === -0.0 );
// returns true

bool = isSameValueZero( 0.0, -0.0 );
// returns true

bool = isSameValueZero( -0.0, 0.0 );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-same-value-zero@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var bool = isSameValueZero( true, true );
// returns true

bool = isSameValueZero( true, false );
// returns false

bool = isSameValueZero( 'beep', 'beep' );
// returns true

bool = isSameValueZero( 3.14, 3.14 );
// returns true

bool = isSameValueZero( null, null );
// returns true

bool = isSameValueZero( 0.0, 0.0 );
// returns true

bool = isSameValueZero( -0.0, 0.0 );
// returns true

bool = isSameValueZero( NaN, NaN );
// returns true

bool = isSameValueZero( {}, {} );
// returns false

bool = isSameValueZero( [], [] );
// returns false

bool = isSameValueZero( isSameValueZero, isSameValueZero );
// returns true

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-same-value`][@stdlib/assert/is-same-value]</span><span class="delimiter">: </span><span class="description">test if two arguments are the same value.</span>
-   <span class="package-name">[`@stdlib/assert-is-strict-equal`][@stdlib/assert/is-strict-equal]</span><span class="delimiter">: </span><span class="description">test if two arguments are strictly equal.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-same-value-zero.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-same-value-zero

[test-image]: https://github.com/stdlib-js/assert-is-same-value-zero/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-same-value-zero/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-same-value-zero/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-same-value-zero?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-same-value-zero.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-same-value-zero/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-same-value-zero/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-same-value-zero/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-same-value-zero/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-same-value-zero/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-same-value-zero/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-same-value]: https://github.com/stdlib-js/assert-is-same-value/tree/umd

[@stdlib/assert/is-strict-equal]: https://github.com/stdlib-js/assert-is-strict-equal/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
