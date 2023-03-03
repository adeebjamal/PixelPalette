const vscode = require('vscode');
const fs = require("fs");
const path = require("path");
const nodeVibrant = require("node-vibrant");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('pixelpalette--image-color-extractor.suggestColours', function () {
		let imagePath = "";
		vscode.window.showInputBox({
			prompt : "Enter path of image."
		}).then((filePath)=> {
			if(filePath) {
				imagePath = path.resolve(filePath);
			}
			const image = fs.readFileSync(imagePath);
			nodeVibrant.from(image).getPalette((err,palette)=> {
				let result = "";
				if(err) {
					result = "Operation failed successfully.";
				}
				else {
					const paletteColors = Object.values(palette);
					for (let index = 0; index < paletteColors.length; index++) {
						result+= paletteColors[index].hex + " ";
					}
				}
				vscode.window.showInformationMessage(result);
			});
		});
	});
	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}