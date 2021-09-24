# Interpolate

Write a function that accepts 2 parameters:

1st parameter is a string that can have placeholder tokens eg. `Hello {{name}}`. 
2nd parameter is an object with replacements.

Place holder keys can deeply access the replacements object via the `.` character. Eg. `{{ hello.name }}` would access the `name` property on the `hello` object.

*Notes*:

- Keys will only contain the following characters a-z 0-9 and a `.` character.
- Placeholder tokens can have arbitrary length whitespace around the given key. Eg. `{{  name }}`
- The values will never have property names containing `.` 

## Running the test cases

The test cases will be running in the terminal as you save the file.
