var assert = require("assert");
var table = require("../jqtest.js");
 
describe('table', function() {
  var input = [["apple", 10],["pear", 20]];
  var expectedoutput = "<table>\r\n" + "\t<tr><td>apple</td><td>10</td></tr>\r\n" + "\t<tr><td>pear</td><td>20</td></tr>\r\n" + "</table>\r\n"; 
  describe('#generateTable', function() {
    it('should return html table from a 2D array', function() {
    assert.equal(expectedoutput, table.generateTable(input));
    });
  });
});

describe('table', function() {
  var input = [{apple:"10"}, {pear:"20"}];
  var expectedoutput = "<table>\r\n" + "\t<tr><td>apple:10</td></tr>\r\n" + "\t<tr><td>pear:20</td></tr>\r\n" + "</table>\r\n";
  describe('#generateTable', function() {
    it('should return html object table from an array of objects', function() {
      assert.equal(expectedoutput, table.generateTable(input));
    });
  });
});
