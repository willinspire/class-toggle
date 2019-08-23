## Welcome to class-toggle

Toggle HTML class properties with Javascript. [View Demo](https://willinspire.github.io/class-toggle/view/index.html)

<hr>

## Ingredients List

### 1) Assign an id to each target element

In the demo page (click the link above) each button is given one of the following id's:

```
id="b01"
id="b02"
id="b03"
id="b04"
```

### 2) Create some styles in CSS

Various CSS styles are defined in the `<head>` of the HTML document. These styles are connected to a series of different classes that we can use throughout the page. Here are the specific styles used in the demo page:

```
// Color Variations 1
.tc-blue {background-color:black;color:#0d5cab;padding:0 2px;}
.tc-green {background-color:black;color:green;padding:0 2px;}
.tc-grey {background-color:black;color:grey;padding:0 2px;}
.tc-red {background-color:black;color:red;padding:0 2px;}

// Color Variations 2
.tc-blue-bg {background-color:#0d5cab;color:black;padding:0 2px;}
.tc-green-bg {background-color:green;color:black;padding:0 2px;}
.tc-grey-bg {background-color:grey;color:black;padding:0 2px;}
.tc-red-bg {background-color:red;color:black;padding:0 2px;}

// Color Variations 3
.tc-blue-bg-w {background-color:#0d5cab;color:white;padding:0 2px;}
.tc-green-bg-w {background-color:green;color:white;padding:0 2px;}
.tc-grey-bg-w {background-color:grey;color:white;padding:0 2px;}
.tc-red-bg-w {background-color:red;color:white;padding:0 2px;}
```

### 3) Assign 'class' properties to each target element

A class (from the "Color Variations 1" series) is assigned to each button in the demo page. Specifically, these are the classes assigned:

```
class="tc-blue"
class="tc-green"
class="tc-grey"
class="tc-red"
```

### 4) Javascript (jQuery)

After sourcing the jQuery source code in the document, the following jQuery script is added to the bottom of the `<body>` section of the page:

```
$('#b01').click(function() {$(this).toggleClass('tc-blue');$(this).toggleClass('tc-blue-bg-w');});
$('#b02').click(function() {$(this).toggleClass('tc-green');$(this).toggleClass('tc-green-bg-w');});
$('#b03').click(function() {$(this).toggleClass('tc-grey');$(this).toggleClass('tc-grey-bg-w');});
$('#b04').click(function() {$(this).toggleClass('tc-red');$(this).toggleClass('tc-red-bg-w');});
```

The jQuery snippet above points to each respective button `id` (signified by the `#` symbol). It then defines a new function which will be triggered if that button is clicked. Each function defined in this way is set to toggle the `class` of the respective button (using `toggleClass`), and the options being toggled are two of the classes we defined above in CSS (see [step #2](https://github.com/willinspire/class-toggle/blob/master/README.md#2-create-some-styles-in-css) above).


