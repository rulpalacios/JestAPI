const USER = 'user'
const { nanoid } = require('nanoid')
const store = require('../../../store/dummy')

module.exports = function(){
  function list(){
    return store.list(USER)
  }

  function get(id){
    return store.get(USER, id)
  }

  async function upsert(body){
    const user = {
      name: body.name,
      username: body.username
    }
    if(body.id){
      user.id = body.id
    } else {
      user.id = nanoid()
    }
    return store.upsert(USER, user)
  }

  return {
    list,
    get,
    upsert
  }
}