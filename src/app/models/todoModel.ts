import { Model, model, models, Schema } from "mongoose"
import { title } from "process"


interface TodoDocument extends Document {
    title: string,
    isDone: boolean
};


const todoSchema = new Schema({
    title :{
        type : String,
        require: true

    },

    isDone: {
        type : Boolean,
        default: false
    }
},
{
    timestamps: true
}

);


const TodoModel = models.Todo || model("Todo", todoSchema);

export default TodoModel as Model<TodoDocument>;