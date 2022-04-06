# Bread

Bread calculator for baking bread

[Try it out here](https://martinbagshaw.github.io/Bread/)

### Things used:

- html input `pattern` attribute to aid validation with JavaScript
- `step` attribute to determin how much numbers can be incremented by
- a load of DOM manipulation I haven't done in ages

### Possible improvements:

- show a dirty state - where numbers are visibly invalid (e.g. greyed out) until form is submitted
- make values update on the fly / without submit button
- switch between percentage / calculated quantity in the input fields
- more testing in browsers other than Chrome. Already encountered a Safari bug where number values that did not fit into the `step` value were marked as invalid.
