import mysql from 'mysql2/promise'

export const dbConnection = async () => {
  const mySqlConnection = await mysql.createConnection({
    host: 'localhost',
    database: 'omega',
    // port: 3000,
    user: 'root',
    password: 'root',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
  })

  return mySqlConnection
}
