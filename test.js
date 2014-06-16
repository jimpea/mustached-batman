//copied from blog.teamtreehouse.com
window.onload = function() {
  var fileInput = document.getElementById('fileInput');
  var fileDisplayArea = document.getElementById('fileDisplayArea');

  fileInput.addEventListener('change', function(e) {
    var file = fileInput.files[0];
    //Restrict selection to csv files on Linux systems or MS Windows
    var textType = /(text.csv)|(application\/vnd.ms-excel$)/;

    if (file.type.match(textType)) {
      var reader = new FileReader();

      reader.onload = function(e) {
        var data = new CsvData(reader.result);
//        fileDisplayArea.innerText = data.rawText();
          fileDisplayArea.innerHTML = data.htmlTable();
      }

      reader.readAsText(file);
    } else {
      fileDisplayArea.innerText = "File Type: '" + file.type + "' not supported";
    }
  });

}

// Represent the csv data
function CsvData(csvtext) {
  this.text = csvtext;
  
  this.rawText = function() {
    return this.text;
  };
 
  //From StackOverflow.com, see http://jsfiddle.net/frvQ2/
  //Note: removed the 'slice(0,-1)' designed to remove trailing commas on the line:
  //but we have no commas, neither do standard csv files, although there is no official standard for csv.
  //Method assumes no trialing commas on the line.
  //
  this.htmlTable = function() {
	  var data = this.text;
	  var i;
	  var output = [];
	  var lines = data.split("\n");
	  
	  for (i = 0; i < lines.length; i++)
		  output.push("<tr><td>"
				  + lines[i].split(",").join("</td><td>")
				  + "</td></tr>");
	  output = "<table>" + output.join("") + "</table>";
		
	  return output;
  };

}

