import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }
})

const user = mongoose.model("User", userSchema)
export default user