//? fs is `file system`
const fs = require("fs");

//? Create New File (override if exists)
fs.writeFile("./file1", "The change will override all!", () =>
  console.log("Do something when you finish...")
);

//? Read (error if not fund)
fs.readFile("./file1", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString()); //! we have to add `toString()` to the data
  }
}); //! The `data` return as a buffer, so we have to make it a string!

//? ExistsSync (true/false - Sync!)
if (fs.existsSync("./some_file_name")) {
}

//? Make New Directory (error if exists)
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("folder created");
    }
  });
}

//? Remove File (error if not fund)
if (fs.existsSync("./file_to_delete.txt")) {
  fs.unlink("./file_to_delete.txt", (err) => {
    err ? console.log(err) : console.log("file deleted");
  });
}
