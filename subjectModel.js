const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema(
    {
        nombre: {
            type: String
        },
        codigo: {
            type: String
        },
        creditos: {
            type: Number
        },
        horario: {
            dia: { type: String},
            horaInicio: { type: String},
            horaFin: { type: String}
        },
      
          cupos: { type: Number},
          profesores: { 
            profesor1: {type: String},
            profesor2: {type: String},

          }

    },
    {
        timestamps:true,
        versionKey: false
    }
)

const subjectModel = mongoose.model("materias", subjectSchema);
module.exports = subjectModel;
