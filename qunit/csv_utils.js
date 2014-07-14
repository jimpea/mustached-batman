//csv_utils.js
//Produces an html fomatted table from text, array or object data
//The module pattern wraps up the code into a secure object.
//The client calls the from_array method like this:
//
//tabulator = table_generator();
//html = tabulator.from_array(input);

var table_generator = function(data_array) {

  var html = '';
  var headers = data_array[0];
  var data = data_array.slice(1);
  data.map(function(x) {
    return Number(x);
  });
  

  return {
    html: function() {
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
    }(),

    isValid: function() {
      if(data[0].length >= 2) {
        return true;
      }
      return false;
    }(),

    data: function() {
      return data;
    }(),

    headers: function() {
      return headers;
    }(),
    
    peaks: function() {
      //the data is in the file as strings. I must convert to number
      //before running this test. The data also contains a header. I 
      //should separate this out in the constructor into a separate
      //array (two places)
      
      
      var peak=[];
      var slope = 0;
      var response = data[0][1];
      data.forEach(function(entry) {
          if (response > entry[1]) {
             slope = -1;          
          } else {
            if (response < entry[1]) {
              slope = 1;
            } else {
              slope = 0;
            }
          };
          slope = entry[1]-response;
          response =  entry[1];
          peak.push(slope);
      });
      peak.push(9);
      peak.push(21);
      //return [9,21];
      return peak;
    }()
    
  };
};
