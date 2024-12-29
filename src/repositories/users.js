class UserRepositories {
    constructor(connection) {
        this.connection = connection;
    }

    // create a new user
    create(user, callback) {
        const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
        return new Promise((resolve, reject) => {
            this.connection.query(query,[user.name, user.email], (err, results) => {
                if (err) {
                    console.error(err.message);
                    return reject(err);
                }
                resolve({ id: results.insertId, ...user });
            });
        });
    }

    // read all users
    readAll() {
        const query = 'SELECT * FROM users';
        return new Promise((resolve, reject) => {
            this.connection.query(query, (err, results) => {
                if (err) {
                    console.error('Error fetching users:', err.message);
                    return reject(err);
                }
                resolve(results);
            });
        });
    }
    
    

    // read a user by ID
    readById(id, callback) {
        const query = 'SELECT * FROM users WHERE id = ? LIMIT 1';
        return new Promise((resolve, reject) => {
            this.connection.query(query,[id], (err, results) => {
                if (err) {
                    console.error('Error fetching users:', err.message);
                    return reject(err);
                }
                resolve(results[0] || null);
            });
        });
    }

    // update a user by ID
    update(id, updatedData, callback) {
        const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
        return new Promise((resolve, reject) => {
            this.connection.query(query,[updatedData.name, updatedData.email, id], (err, results) => {
                if (err) {
                    console.error('Error fetching users:', err.message);
                    return reject(err);
                }
                resolve(results.affectedRows > 0 ? true : false);
            });
        });
    }

    // delete a user by ID
    delete(id, callback) {
        const query = 'DELETE FROM users WHERE id = ?';

        return new Promise((resolve, reject) => {
            this.connection.query(query,[id], (err, results) => {
                if (err) {
                    console.error(err.message);
                    return reject(err);
                }
                resolve( results.affectedRows > 0 ? true : false );
            });
        });
    }
}

module.exports = UserRepositories;
