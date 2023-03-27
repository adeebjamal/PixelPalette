# PixelPalette

PixelPalette is a Visual Studio Code extension that extracts the hex codes of colors present in an image, allowing you to create matching color schemes for your projects.

## Features

- Extract hex codes of colors present in an image.
- Show colors along with Hex codes for easy copy-pasting.
- Supports common image formats such as JPEG, PNG, and GIF.
- Simple and easy to use.

## Usage

- To use PixelPalette, simply Right Click on any image and copy its path. Then open VS Code and press Ctrl + Shift + P.
- A command prompt will open where you will have to write "Suggest Colours" and hit Enter.
- A dialogue box will open where you will paste the path of image.
- Finally, you will see hex codes along with colors in the output panel.

## Requirements

PixelPalette requires Node.js and the node-vibrant package to be installed on your system.

## Installation

- Install Node.js on your system.
- Install the node-vibrant package by running the following command in your terminal: npm install node-vibrant
- In VS Code, open the Extensions view by clicking on the Extensions icon in the sidebar or by pressing Ctrl+Shift+X.
- Search for "PixelPalette" in the Extensions view and click on the "Install" button.

## Known Issues

- PixelPalette may not work with some types of images.
- PixelPalette may take a few seconds to extract the color palette from large images.

## Release Notes

0.0.1
Initial release of PixelPalette.

## License

PixelPalette is licensed under the <a href = "LICENSE">MIT</a> License.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

## Credits

PixelPalette was created by <a href = "https://github.com/adeebjamal">Adeeb Jamal</a>.
