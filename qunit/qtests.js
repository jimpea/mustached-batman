//qtests.js
//This series of tests assumes JQuery

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

QUnit.asyncTest("file load test", function(assert) {
  expect(2);

  jQuery.get('trace.csv', function(data) {
    var data_array = $.csv.toArrays(data);
    var tabulator = table_generator(data_array);
    var expected_headers = ["s","uS"];
    var expected_peak = [];
    assert.deepEqual(tabulator.data.length, 33, "The test csv file should generate 33 array entries");
    assert.deepEqual(tabulator.data[0], expected_headers, "The headers should be in the first array element");
    
    QUnit.start();
  });
});




