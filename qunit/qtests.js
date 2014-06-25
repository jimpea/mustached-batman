//qtests.js
//This series of tests assumes JQuery and wraps the test in the JQuery ready function 
//to ensure that the html loads fully for the test.
$(document).ready(function () {
  var input = [[1,1],[2,2]];
  var invalid_input= [1,2,3,4];
  var expected = "<table>\r\n\t<tr><td>1</td><td>1</td></tr>\r\n\t<tr><td>2</td><td>2</td></tr>\r\n</table>\r\n"

  QUnit.test("table test", function(assert) {
    var tabulator = table_generator(input);
    assert.ok(tabulator !== null, "Table object should load");
    assert.ok(tabulator.html === expected, "Correct html table from array input");
    assert.ok(tabulator.isValid === true, "The csv should represent correctly formated scan data");
    var bad_tabulator = table_generator(invalid_input);
    assert.ok(bad_tabulator.isValid === false, "1D arrays are invalid"); 
  });
});



