const pool = require('./db/db');

try {
    pool.connect();
    console.log("se conecto a la base de datos");
} catch (e) {
    console.log(e);
}