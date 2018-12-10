
const login = async (credentials) => {
  const user = {
    'username':'test',
    'adult':true,
    'name':'test',
    blogs: [],
    _id:'123'
  }
  return Promise.resolve(user)
}

export default { login }