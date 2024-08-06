const express = require("express")
const app = express()
const port = 3001

app.use(express.static("./app/public"))

app.set("view engine", "ejs")
app.set("views", "./app/views")

app.use(express.json())

const main = require("./app/routes/main")
app.use("/", main)

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}\nhttp://localhost:${port}`)
})