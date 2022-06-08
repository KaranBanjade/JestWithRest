const { Router } = require("express")
const express = require("express")

const port = process.env.PORT || 3000

const app = express()

const BlogModel = require("../src/models/schema")
const router = require("./routers/route")

app.use(express.json())

app.use('/',router);

module.exports = app;


