const express = require('express');
const fs = require('fs');
const app = express();

// get api call
app.get('/getTreeViewData', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    fs.readFile("./data/data.json", "utf-8", (err, data) => {
        if(!err) {
            res.send(JSON.parse(data));
        }
    })
})

app.listen(5000, () => {
    console.log("The server is running on port 5000");
});