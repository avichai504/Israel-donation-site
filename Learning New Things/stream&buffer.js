const fs = require("fs");

const readStream = fs.createReadStream("./very_large_file.txt");

readStream.on("data", (chunk) => {
  writeStream.write(`----------------NEW CHUNK------------------ \n ${chunk}`);
});

const writeStream = fs.createWriteStream("file_created_by_writing_chunks.txt");

// readStream.pipe(writeStream); //! This is the function that read and write






