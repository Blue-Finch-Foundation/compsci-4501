import express from "express"

const app = new express()

app.get("/", (req, res) => {
    res.send({ text: "Hello There" })
})

app.get("/hi", (req, res) => {
    res.send("Hi There")
})

app.listen(3000)