const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
    // const salt = await bcrypt.genSalt(12);
    // const hash = await bcrypt.hash(pw, salt);
    const hash = await bcrypt.hash(pw, 12);
    // console.log(salt);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw)
    if (result) {
        console.log('logged you in')
    } else {
        console.log('try again')
    }
}

// hashPassword('monkey')
login('monkey', '$2b$12$ESz2tGZoIkPZLNTXA/h1jeXRWyT6yRqNkCnWJo0PIBGSxFykZUWHS')