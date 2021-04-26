const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '',
    port: 5432,
})

const getDepartments = (request, response) => {
    pool.query('SELECT * FROM departments ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)

    })

}

module.exports = {
    getDepartments
}
