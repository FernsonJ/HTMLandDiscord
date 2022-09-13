const express = require('express');
const server = express();
server.all('/', (req, res)=>{
    res.send('D4MFERN said your Bot is Up')
})

function keepAlive(){
    server.listen(3000, ()=>{console.log("Your Bot is Online. If the Page is up, then your Bot is up. If not, Check your Coding.")});
}
module.exports = keepAlive;
