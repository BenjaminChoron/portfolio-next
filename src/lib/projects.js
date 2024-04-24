import sql from 'better-sqlite3'

const database = sql('database.db')

export function getProjects() {
  return database.prepare('SELECT * FROM projects').all()
}