String Pants
================================================================================

**String Pants** make working with strings tight... like jeans?

Ok, more to the point, this thing here is a string-manipulation module that's
built to play well with others. I personally prefer to extend native objects
so this library gives you that ability through its `install()` method. If you're
not into that sort of thing you can just require it and use it as a standalone
module like one would with underscore.js:

If you install it you'll get to use it like this:

```js
require('string-pants').install();
'this is rad.camel();
// --> thisIsRad
```

If you don't install it you can use it like this:

```js
var pants = require('string-pants');
pants.camel('this is rad');
// --> thisIsRad
```


What's the API?
--------------------------------------------------------------------------------

I bet you'd find that out pretty quick if you read 'index.js'.


Should I Use This?
--------------------------------------------------------------------------------

Sure? I mean come on, I'm not your dad.


But why is it called String Pants?
--------------------------------------------------------------------------------

You're seriously starting to bother me.


Installation
--------------------------------------------------------------------------------

String Pants is compatible with your typical CommonJS `require` shim, RequireJS
and plain old `<script>` tag embedding. If you choose to use the script tag
method, the extensions will be installed on `String.prototype` by default
because you obviously don't give a shit.


Install it with NPM:

    $ npm install string-pants

Then require it in your app: 

    require("string-pants").install();
