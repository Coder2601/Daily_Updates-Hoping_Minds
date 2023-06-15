const express = require("express");
const routes = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

let actualPass = 'Hello@World';
let trial1 = 'Manav@123';
let trial2 = 'Hello@World';

async function genSaltAndEncrypt() {

    //generated Salt
    const salt = await bcrypt.genSalt(saltRounds);
    // console.log(salt);

    const hashedPwd = await bcrypt.hash(actualPass, salt);
    console.log(`Encrypted : ${hashedPwd}`);
    console.log(`Actual : ${actualPass}`);

}

async function hashingPwd() {

    try {
        const hashedPass = await bcrypt.hash(actualPass, saltRounds)
        console.log(hashedPass);
        checkPass(hashedPass)
    } catch (error) {
        console.log(error);
    }
}

async function checkPass(x){
    const result = await bcrypt.compare(trial2,x);
    console.log(result);
}


routes.get('/', (req, res) => {
    // genSaltAndEncrypt();
    hashingPwd();
    res.send('salt generated');
})


module.exports = routes;