import mongoose ,{Schema} from "mongoose"
const userSchema= new Schema(
    {
        username:{
            type:String,
            required:true,
            unquie:true,
            lowercase:true,
            index
        }
    }
)

export const User=mongoose.model("User",userSchema) 