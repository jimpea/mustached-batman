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
        fileDisplayArea.innerText = data.rawText();
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
 
  this.htmlTable = function() {
    var table = "<table><tr><td>One</td><td>10</td></tr></table>";
    return table;
  };

}

