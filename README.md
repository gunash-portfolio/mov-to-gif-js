# MOV to GIF Converter (Node.js Script)

This Node.js script converts `.mov` files to `.gif` format using the `ffmpeg` command-line tool. You can provide the `.mov` file path from the terminal, and the script will output a `.gif` in the same directory.

## Prerequisites

### 1. Install Node.js

Make sure you have [Node.js](https://nodejs.org) installed on your machine. You can check by running:

```bash
node -v
```
If Node.js is installed, it will return the version number. If not, follow the installation instructions at nodejs.org.
### 2. Install ffmpeg
The script uses `ffmpeg` to perform the video conversion. You need to install `ffmpeg` on your system:

#### MacOS(Using Homebrew)
```bash
brew install ffmpeg
```

#### Windows
1. Download `ffmpeg` from the official website: ffmpeg.org  [ffmpeg](https://ffmpeg.org).
2. Follow the installation instructions for Windows.
3. Add `ffmpeg` to your system's PATH so you can use it in the command line.

4. To verify that ffmpeg is installed, run:
```powershell
ffmpeg -version
```

#### Linux(Debian/Ubuntu)
```bash
sudo apt update
sudo apt install ffmpeg
```
## How to Use
1. Clone this repository or copy the script.
2. Save the script as `convertMovToGif.js`.
3. Open a terminal in the same directory where the script is saved.
4. Run the following command, replacing `path/to/your/video.mov` with the actual path to your .mov file:

```bash
node convertMovToGif.js path/to/your/video.mov
```
Example:
```bash
node convertMovToGif.js ./example.mov
```
## Conversion Details
- The output `.gif` will be saved in the same directory as the `.mov` file with the same name (but `.gif` extension).
- You can modify the `fps` (frames per second) and `scale` options inside the script to adjust the quality of the GIF.

## **License**
This project is licensed under the MIT License. [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
