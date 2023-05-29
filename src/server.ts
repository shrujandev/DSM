const express = require('express');

const port = 3000;
const app = express();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get('/api/v0',(req, res)=>{
    res.set('Access-Control-Allow-Origin', 'http://localhost:5002');

});

export {}