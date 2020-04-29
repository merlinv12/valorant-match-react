const express = require('express');
const PORT = 3333


const app = express();
app.use(express.static('public'))

app.listen(PORT, console.log(`Server is listening on ${PORT}`))