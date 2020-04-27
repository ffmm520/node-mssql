const { ConnectionPool } = require('mssql')
const POOLS = {}
 
function createPool(config, name) {
  if (getPool(name)) {
    throw new Error('Pool with this name already exists')
  }
  return POOLS[name] = (new ConnectionPool(config)).connect()
}
 
function closePool(name) {
  if (Object.prototype.hasOwnProperty.apply(POOLS, name)) {
    const pool = POOLS[name];
    delete POOLS[name];
    return pool.close()
  }
}
 
function getPool(name) {
  if (Object.prototype.hasOwnProperty.apply(POOLS, name)) {
    return POOLS[name]
  }
}
 
module.exports = {
  closePool,
  createPool,
  getPool
}