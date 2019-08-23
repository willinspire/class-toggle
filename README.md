## class-toggle

Toggle HTML class properties with Javascript. [View Demo](https://willinspire.github.io/class-toggle/view/index.html)

<hr>

Here's what's happening under the hood (with jQuery):

```
$('#b01').click(function() {$(this).toggleClass('tc-blue');$(this).toggleClass('tc-blue-bg-w');});
$('#b02').click(function() {$(this).toggleClass('tc-green');$(this).toggleClass('tc-green-bg-w');});
$('#b03').click(function() {$(this).toggleClass('tc-grey');$(this).toggleClass('tc-grey-bg-w');});
$('#b04').click(function() {$(this).toggleClass('tc-red');$(this).toggleClass('tc-red-bg-w');});
```
