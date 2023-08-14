// const read = require("read");
const readline = require("readline");
const { execSync, exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getCurrentTimestamp = () => {
  const now = new Date();
  const timestamp = now.toISOString().replace(/[-T:Z]/g, "");
  return timestamp;
};

const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

readFile(path.join(__dirname, "initial.sql"))
  .then((data) => {
    return data;
  })
  .catch((err) => {
    return err;
  });

const prepareDatabase = async (command) => {
  console.info("> Reading commands...");
  console.clear();
  try {
    console.info("> Executing commands...");
    execSync(command, { stdio: "inherit" });
    console.info("> Database Preparation is Completed!");
  } catch (error) {
    console.error("> Error exectuing command:\n" + command + "\n" + error);
  }
};

class MySQLUtilities {
  prepareDatabase() {}
}
