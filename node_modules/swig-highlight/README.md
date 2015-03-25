swig-highlight [![Build Status](https://travis-ci.org/mrgamer/swig-highlight.svg?branch=master)](https://travis-ci.org/mrgamer/swig-highlight) [![Dependencies status](https://david-dm.org/mrgamer/swig-highlight.png)](https://david-dm.org/)
==============

extension for the swig templating engine, adding highlight.js code blocks to be rendered!

# How-To install

Wherever you're including `require('swig')`, you'll have to include `swig-highlight` as
well.

Enable it with the helper like this:
```javascript
var swig = require('swig');
require('swig-highlight').apply(swig);
```
`apply` adds the new tag into swig.  


Use it barebone like this (tag name is customizable here):
```javascript
var swig = require('swig'),
    swig-hl = require('swig-highlight');

swig.setTag('hlcode', swig-hl.parse, swig-hl.compile, swig-hl.ends, swig-hl.block);
```

You can start using `{% highlight %}<CODE>{% endhighlight %}` in your code.

## Usage

For now you can enforce a language highlighting ([list](http://highlightjs.org/static/test.html)),
or let highlight.js guess by omitting it.
```
{% highlight 'bash' %}
###### COMMENT HERE

if [ "$UID" -ne 0 ]
then
 echo "Superuser rights is required"
 echo 'Printing the # sign'
 exit 2
fi
{% endhighlight %}
```

You will need to read also [highlight.js usage](http://highlightjs.org/usage/) to make
your html be correctly colorized.

As an easy hint, just include ([as suggested by highlight.js authors](http://highlightjs.org/download/))
a default css from [Yandex](http://api.yandex.ru/jslibs/libs.xml#highlightjs)

```html
<link rel="stylesheet" href="http://yandex.st/highlightjs/8.0/styles/default.min.css">
```

## Known Issues

Using the _highlight_ tag with the code being a variable instead of a string does not
work currently.

There is no limitation around this, just requires quite a bit of coding, so PR are welcome!
