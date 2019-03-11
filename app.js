const express = require('express');
const pug = require('pug')
const db = require('./util/database')

const app = express()

//Uporabimo templating engine, preko express (v node.js bolj zapleteno):
app.set('view engine', 'pug');
app.set('views', 'views');
//app.set omogoča nam nastavitev globalnih vrednosti, nevem ... glej API

