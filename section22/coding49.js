function validUserNames(usernames) {
    return usernames.filter(name => {
        return name.length < 10;
    })
}