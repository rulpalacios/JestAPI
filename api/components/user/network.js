const express = require('express')
const response = require('../../../network/response')
const Controller = require('./index')

const router = express.Router()

router.get('/', list)
router.get('/:id', get)
router.post('/', upsert)
router.put('/', upsert)

async function list(req, res){
  try{
    const users = await Controller.list()
    response.success(req, res, users, 200)
  } catch(err){
    response.error(req, res, err.message, 500)
  }
}

async function get(req, res){
  try{
    const user = await Controller.get(req.params.id)
    response.success(req, res, user, 200)
  } catch(err){
    response.error(req, res, err.message, 500)
  } 
}

async function upsert(req, res){
  try{
    const user = await Controller.upsert(req.body)
    response.success(req, res, user, 200)
  }catch(err){
    response.error(req, res, err.message, 500)
  }
}
module.exports = router