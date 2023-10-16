const fs = require('fs');


const foldername = process.argv[2] || 'Project';

fs.mkdirSync(foldername, { recursive: true }, (err) => {
    console.log("in the callback");
    if (err) throw err;
})

console.log("I come after mkdir in file")

try {
    fs.writeFileSync(`${foldername}/index.html`, '')
    fs.writeFileSync(`${foldername}/app.js`, '')
    fs.writeFileSync(`${foldername}/styles.css`, '')
} catch (e) {
    console.log('The following error happpened: ', e)
}