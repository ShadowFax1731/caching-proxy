const { Command } = require("commander");

const program = new Command();

program
    .option("--port <number>", "Port for starting the proxy server", 3000)
    .option("--origin <url>", "Original Server URL")
    .option("--clear-cache", "Clear the cache")
    .parse(process.argv);

const options = program.opts();
console.log(options);
module.exports = options;
