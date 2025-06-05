import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'sql3.freesqldatabase.com',
    user: 'sql3783233',
    password: 'Gru6NWjJR4',
    database: 'sql3783233',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId);
});

export default connection;