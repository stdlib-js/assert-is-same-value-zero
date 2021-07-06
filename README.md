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

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test if two arguments are the same value.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-same-value-zero
```

</section>

<section class="usage">

## Usage

```javascript
var isSameValueZero = require( '@stdlib/assert-is-same-value-zero' );
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

```javascript
var isSameValueZero = require( '@stdlib/assert-is-same-value-zero' );

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
```

</section>

<!-- /.examples -->


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

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-same-value-zero.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-same-value-zero

[test-image]: https://github.com/stdlib-js/assert-is-same-value-zero/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-same-value-zero/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-same-value-zero/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-same-value-zero?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-same-value-zero.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-same-value-zero/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-same-value-zero/main/LICENSE

[@stdlib/assert/is-same-value]: https://github.com/stdlib-js/assert-is-same-value

</section>

<!-- /.links -->