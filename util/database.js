const mysql = require('mysql2')
//lahko bi vedno znova vzpostavljali povezave, vendar pa je to časovno potratno
//zato ustvarimo pool povezav, iz njega jemljemo "proste povezave" po potrebi in jih vračamo

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	database: 'nodejs_db',
	password: 'brun13cajt'
})

module.exports = pool.promise()
//.promise() nam omogoča uporabo promise ... 
//promise je objekt, ki nam omogoča delovanje z asynhronsko kodo, 
//na bolj pregleden način kot z callbacks

//promises imajo dve funkcije .then() in .cathc()
//.then je callback
//.catch pa se izvede v primeru errorja