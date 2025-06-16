import express from 'express'
import { addData, addDataPage, deleteData, getData, home, updateData, updateDataPage } from '../controller/user.controller.js'

const router = express.Router()

router.get("/", home)

router.get('/get-data/:id', getData)

router.get('/add-data', addDataPage)

router.post('/add-data', addData)

router.get('/update-data/:id', updateDataPage)

router.post('/update-data/:id', updateData)

router.get('/delete-data/:id', deleteData)

export default router
