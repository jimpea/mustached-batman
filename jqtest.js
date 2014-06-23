//jqtest.js
//Produces an html fomatted table from text, array or object data
//

(function(exports) {
  "use strict";
function generateTable(data) {
  var html = '';

  if(typeof(data[0]) === 'undefined') {
    return null;
  }

  if(data[0].constructor === String) {
    html += '<tr>\r\n';
    for(var item in data) {
            html += '<td>' + data[item] + '</td>\r\n';
    }
    html += '</tr>\r\n';
  };

  if(data[0].constructor === Array) {
    html += '<table>\r\n';
    for(var row in data) {
      html += '\t<tr>';
      for(var item in data[row]) {
        html += '<td>' + data[row][item] + '</td>';
      }
      html += '</tr>\r\n';
    }
    html += '</table>\r\n';
  };

  if(data[0].constructor === Object) {
    html += '<table>\r\n';
    for(var row in data) {
      html += '\t<tr>';
      for(var item in data[row]) {
        html += '<td>' + item + ':' + data[row][item] + '</td>';
      }
      html += '</tr>\r\n';
    }
    html += '</table>\r\n';
  };
  return html;
};
exports.generateTable = generateTable;
})(this);

