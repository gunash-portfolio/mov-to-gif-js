const { exec } = require("child_process");
const path = require("path");

// Get file path from the command line arguments
const inputFilePath = process.argv[2];

// Check if input file path is provided
if (!inputFilePath) {
  console.error("Please provide the .mov file path.");
  process.exit(1);
}

// Ensure the input file is a .mov file
if (path.extname(inputFilePath).toLowerCase() !== ".mov") {
  console.error("Please provide a valid .mov file.");
  process.exit(1);
}

// Set the output file path (same as input but with .gif extension)
const outputFilePath = inputFilePath.replace(/\.mov$/, ".gif");

// Convert .mov to .gif using ffmpeg
const command = `ffmpeg -i "${inputFilePath}" -vf "fps=10,scale=320:-1:flags=lanczos" "${outputFilePath}"`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`ffmpeg stderr: ${stderr}`);
    return;
  }
  console.log(`Conversion successful! GIF saved at: ${outputFilePath}`);
});
