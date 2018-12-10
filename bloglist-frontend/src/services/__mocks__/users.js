
let users = []

const config = () => {
  return {}
}

const getAll = () => {
  return users
}

const setToken = (newToken) => {
}

const create = async (newObject) => {
  newObject.id = '' + Math.random()
  users.push( newObject )
  return users
}

const update = (id, newObject) => {
  //TODO:
  return users
}

const remove = (id) => {
  users = users.filter( (a) => a.id!==id )
  return users
}

export default { getAll, create, update, remove, setToken }