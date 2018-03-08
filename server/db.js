const { Pool } = require('pg');
const pool = new Pool({
    database: 'books-dev',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

export default pool
