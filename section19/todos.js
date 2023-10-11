
let action = prompt("What would you like to do?").toLowerCase()

const list = [];
while (action !== "quit" && action !== "q") {
    if (action === 'new') {
        let item = prompt("What would you like to add to the list?");
        list.splice(list.length, 0, item)
        console.log(`${item} added to the list`);
        action = prompt("What would you like to do?").toLowerCase()
    } else if (action === 'quit') {
        break;
    } else if (action === 'list') {
        console.log('******** START LIST ********')
        // for (let item of list) {
        //     console.log(item)
        // }
        for (let i = 1; i <= list.length; i++) {
            console.log(`${i}: ${list[i - 1]}`)
        }
        console.log('******** END LIST ********')
        action = prompt("What would you like to do?").toLowerCase()

    } else if (action === 'delete') {
        let delindex = parseInt(prompt("What item number would you like to delete?"));
        while (!delindex) {
            delindex = parseInt(prompt("What item number would you like to delete?"));
        }
        console.log(`${list[delindex - 1]} removed from the to do list`);
        list.splice(delindex - 1, 1)
        action = prompt("What would you like to do?").toLowerCase()
    } else {
        console.log("command not recognized. Try again")
        action = prompt("What would you like to do?").toLowerCase()
    }
}
console.log("ok you quit app")