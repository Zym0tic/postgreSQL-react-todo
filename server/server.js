const PORT = process.env.PORT ?? 8000
const express = require('express')
const app = express()

// get all todos
app.get()

app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))