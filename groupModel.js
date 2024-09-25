const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        profesor: {
            type: String
        },
        cupo:{
            type: Number
        },
        materia: {
            type: String
        },
        horario:{
            dia: { type: String},
            horaInicio: { type: String},
            horaFin: { type: String}
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const ModelGroup = mongoose.model("groups", groupSchema);
module.exports = ModelGroup;