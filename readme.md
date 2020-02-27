@skivy71/utils - helpful utility module
=======================================

```JavaScript

var utils = require('@skivy71/utils')

// or destructure as needed...

var { random, string, sys } = require('@skivy71/utils')

string.capitalise('hElLo, wORld') // Hello, world

string.pad('34342', '0', -4) // str, pad, len - len as minus, infers prepend

random.number(10, 3142) // anywhere between 10 and 3142, inclusive

await sys.wait(1000) // wait 1000 ms

number.ordinal(23) // 23rd
```