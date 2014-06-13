//copied from blog.teamtreehouse.com
window.onload = function() {
	var fileInput = document.getElementById('fileInput');
	var fileDisplayArea = document.getElementById('fileDisplayArea');

	fileInput.addEventListener('change', function(e) {
		var file = fileInput.files[0];
		//Select csv files on Linux system or MS Windows
		var textType = /(text.csv)|(application\/vnd.ms-excel)/;
		//var textType = /text.*/;
		//var textType = /application\/vnd.ms-excel/;
		if (file.type.match(textType)) {
			var reader = new FileReader();
			reader.onload = function(e) {
				fileDisplayArea.innerText = reader.result;
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
		var table = "<table><tr><td>One</td><td>10</td)</tr></table>";
		return table;
	};
}

