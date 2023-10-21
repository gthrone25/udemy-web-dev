const franc = require('franc');
const langs = require('langs')
const colors = require('colors')

// const args = process.argv.slice(2);
const args = process.argv[2];

langcode = franc(args)
// console.log(langcode);

if (langcode !== 'und') {
    const lang = langs.where("3", langcode);
    console.log(lang.name.green);
} else {
    console.log('Unrecognized language: Try adding more words'.red)
}