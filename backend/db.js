import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:Xmghj%402435@test1cluster0.kv4ylmk.mongodb.net/")

const todoScheme = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo = mongoose.model("Todo", todoScheme);
export default Todo