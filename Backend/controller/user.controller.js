import mongoose from "mongoose"
import user from "../models/user-model.js"

export const home = async (req, res) => {

    try {
        const userData = await user.find()
        if (!userData) {
            return res.render('404-error', { message: "Data Not Found!" })
        }
        res.render('home', { userData })
    } catch (error) {
        res.render('505-error', { message: error })
    }

}

export const getData = async (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.render('404-error', { message: "Invalid ID!" })
    }

    try {
        const viewData = await user.findById(req.params.id)
        if (!viewData) {
            return res.render('404-error', { message: "user not found!" })
        }
        res.render('get-data', { viewData })
    } catch (error) {
        res.render('505-error', { message: error })
    }

}

export const addDataPage = (req, res) => {
    res.render('add-data')
}

export const addData = async (req, res) => {
    try {
        await user.create(req.body)
        res.redirect('/')
    } catch (error) {
        res.render('505-error', { message: error })
    }

}

export const updateDataPage = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.render('404-error', { message: "Invalid ID!" })
    }

    try {
        const updateData = await user.findById(req.params.id)
        if (!updateData) {
            return res.render('404-error', { message: "user not found!" })
        }
        res.render('update-data', { updateData })
    } catch (error) {
        res.render('505-error', { message: error })

    }

}

export const updateData = async (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.render('404-error', { message: "Invalid ID!" })
    }

    try {
        await user.findByIdAndUpdate(req.params.id, req.body)
        res.redirect("/")
    } catch (error) {
        res.render('505-error', { message: error })
    }

}

export const deleteData = async (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.render('404-error', { message: "Invalid ID!" })
    }

    try {
        await user.findByIdAndDelete(req.params.id)
        res.redirect("/")
    } catch (error) {
        res.render('505-error', { message: error })
    }

}