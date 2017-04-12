// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.8
description: Templates are cached according to the site
info: >
    Templates are cached by source location; different locations will
    have different template objects.
---*/
var previousObject = null;
var firstObject = null;
function tag(templateObject) {
  previousObject = templateObject;
}

tag`foo${1}bar`;

assert(previousObject !== null);
firstObject = previousObject;
previousObject = null;

tag`foo\${1}bar`;

assert(previousObject !== null);
assert(firstObject !== previousObject);
