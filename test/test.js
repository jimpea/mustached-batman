var assert = require("assert");
var table = require("../jqtest.js");

describe('table', function() {
  var input = [["x", 10],["y", 20]];
  var expectedoutput = "<table>\r\n" + "\t<tr><td>x</td><td>10</td></tr>\r\n" + "\t<tr><td>y</td><td>20</td></tr>\r\n" + "</table>\r\n"; 
  describe('#generateTable', function() {
    it('should return html table from a 2D array', function() {
    assert.equal(expectedoutput, table.generateTable(input));
    });
  });
});

describe('table', function() {
  var input = [{x:"10"}, {y:"20"}];
  var expectedoutput = "<table>\r\n" + "\t<tr><td>x:10</td></tr>\r\n" + "\t<tr><td>y:20</td></tr>\r\n" + "</table>\r\n";
  describe('#generateTable', function() {
    it('should return html object table from an array of objects', function() {
      assert.equal(expectedoutput, table.generateTable(input));
    });
  });
});

describe('table', function() {
  var csv="s,uS\r\n1,10\r\n2,10\r\n3,10\r\n4,11\r\n5,13\r\n6,20\r\n7,40\r\n8,55\r\n9,60\r\n10,50\r\n11,35\r\n12,25\r\n13,20\r\n14,18\r\n15,16\r\n16,15\r\n17,15\r\n18,16\r\n19,18\r\n20,25\r\n21,30\r\n22,30\r\n23,26\r\n24,21\r\n25,18\r\n26,15\r\n27,13\r\n28,11\r\n29,10\r\n30,10\r\n31,10\r\n32,10\r\n";

});
