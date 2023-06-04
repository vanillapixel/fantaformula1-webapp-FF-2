var http = require("http");
var fs = require("fs");

function download(filename: string, url: string) {
	var file = fs.createWriteStream(filename);
	var request = http.get(url, (response: any) => {
		response.pipe(file);
	});
}

console.log("Downloading openapi specs");
download("openapi-docs/specs.json", "http://3.83.18.69:8080/v3/api-docs");
