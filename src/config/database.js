const mysql = require('mysql2');

class DatabaseConnection {
    constructor(host,port, user, password, database) {
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
        this.database = database;
    }

    mysqlConnect() {
        const connection = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database,
            port: this.port,
        });

        connection.connect((err) => {
            if (err) {
                console.error('Error connecting to the database:', err.message);
                return;
            }
            console.log('Connected to the MySQL database!');
        });
        return connection;
    }
}

module.exports = DatabaseConnection