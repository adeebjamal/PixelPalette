const vscode = require("vscode");
const fs = require("fs");
const path = require("path");
const nodeVibrant = require("node-vibrant");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "pixelpalette--image-color-extractor.suggestColours",
    function () {
      let imagePath = "";
      vscode.window
        .showInputBox({
          prompt: "Enter path of image.",
        })
        .then((filePath) => {
          if (filePath) {
            imagePath = path.resolve(filePath);
          }
          const image = fs.readFileSync(imagePath);
          nodeVibrant.from(image).getPalette((err, palette) => {
            let result = [];
            if (err) {
              vscode.window.showErrorMessage("Error while extracting colors.");
              return;
            } else {
              const paletteColors = Object.values(palette);
              for (let index = 0; index < paletteColors.length; index++) {
                result.push(paletteColors[index].hex);
              }
            }
            console.log(result);
            // create a panel
            const panel = vscode.window.createWebviewPanel(
              "pixelpalette--image-color-extractor",
              "Pixel Palette",
              vscode.ViewColumn.One,
              {
                enableScripts: true,
              }
            );
            // and set its HTML content
            completedResultHTML = "<table style='width: 100%; height: 100%;'>";
            result.forEach((color) => {
              completedResultHTML += `<tr><td style="width: 100%; height: 100px; background-color: ${color};"></td> 
					<td style =  "color: white; font-size: 20px; font-weight: bold; padding: 10px; margin: 10px 0px;">${color}
					</td>
					</tr>`;
            });
            completedResultHTML += "</table>";
            panel.webview.html = completedResultHTML;
          });
        });
    }
  );
  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
