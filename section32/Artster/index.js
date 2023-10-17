const figlet = require("figlet");
const colors = require("colors");

figlet('Hello World', function (err, data) {
    if (err) {
        console.log('something went wrong');
        console.dir(err);
        return;
    } else { }
    console.log(data.green)
})

