const db = {
  'user':[
      {id: '1', name: 'Raul Palacios', username: 'rul'},
      {id: '2', name: 'Milito Palacios', username: 'milito'}
  ]
}

async function list(table){
  return db[table] || [];
}

async function get(table, id){
  let collection = await list(table)
  return collection.filter(item => item.id === id)[0] || null;
}

async function upsert(table, data){
  if(!db[table]){
      db[table] = []
  }
  db[table].push(data)
  return data
}

module.exports = {
  list,
  get,
  upsert
}