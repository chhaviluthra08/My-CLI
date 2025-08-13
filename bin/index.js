#! /usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')
const translate = require('@vitalets/google-translate-api');
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const figlet = require('figlet');

const usage = chalk.keyword('red')("\nUsage: mycli -l <language>  -s <sentence> \n"
+ boxen(chalk.yellow("\n" + "Translates a sentence to specific language" + "\n"), {padding: 1, borderColor: 'yellow', dimBorder: true}) + "\n");

const options = yargs(hideBin(process.argv))
      .usage(usage)
      .option("l", {alias:"language", describe: "Translate to language", type: "string", demandOption: false })
      .option("s", {alias:"sentence", describe: "Sentence to be translated", type: "string", demandOption: false })
      .help(true)
      .argv;

// console.log(yargs.argv);
const argv = require('yargs/yargs')(process.argv.slice(2)).argv;

if(argv.language == null && argv.l == null){
    console.log(
        chalk.cyanBright(
          figlet.textSync('MY CLI', { horizontalLayout: 'full' })
        )
      );
    yargs(hideBin(process.argv)).showHelp();
    return;
}
if(argv.sentence == null && argv.s == null){
    yargs(hideBin(process.argv)).showHelp();
    return;
}

const language =  argv.l  || argv.language;

const sentence =  argv.s  || argv.sentence;

// console.log( language,sentence);
translate(sentence, {to: language.toLowerCase()}).then(res => {
    console.log("\n" + boxen(chalk.green( sentence + "\n\n" + res.text ), {padding: 1, borderColor: 'green', dimBorder: true}) + "\n");
}).catch(err => {
    console.error(err);
});