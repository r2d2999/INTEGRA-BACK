const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String
        },
         password:{
            type:String
         },
        
        tipo: {
            type: String
        },
        inscrito:{
            type: Boolean,
            default: false
        },
        horario:{
            type: Boolean,
            default: false
        }
      
    },
    {
        timestamps:true,
        versionKey: false
    }
)




const ModelUser = mongoose.model("users", userSchema);
module.exports = ModelUser;