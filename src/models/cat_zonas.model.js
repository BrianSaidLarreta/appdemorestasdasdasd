import mongoose from 'mongoose';
import {ENVIRONMENT,FORMATS_FOR_DATE_AND_TIME} from "../ENV";
const Schema=mongoose.Schema;
module.exports=mongoose.model('cat_zonas',new Schema
(
    {
        IdZona:{type:Number},
        DesZona:{type:String},
        CapacidadPor:{type:Number},
        Fila:{type:Number},
        AsientosPorFilas:{type:Number},
        Activo:{type:String,default:'S'},
        Borrado:{type:String,default:'N'},
        FechaReg:{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        UsuarioReg:{type:String,default:'REST'},
        FechaUltMod:{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        UsuarioMod:{type:String,default:'REST'},
        "res_zonas_servicios":
        [
            {
                IdProdServEsp:0,
                Activo:{type:String,default:'S'},
                Borrado:{type:String,default:'N'},
                FechaReg:{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
                UsuarioReg:{type:String,default:'REST'},
                FechaUltMod:{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
                UsuarioMod:{type:String,default:'REST'}
            }
        ],
        "cat_zonas_archivos":
        [
            {
                IdRutaArchivo:{type:Number},
                RutaArchivo:{type:String},
                TipoArchivo:{type:String},
                Principal:{type:String},
                Activo:{type:String,default:'S'},
                Borrado:{type:String,default:'N'},
                FechaReg:{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
                UsuarioReg:{type:String,default:'REST'},
                FechaUltMod:{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
                UsuarioMod:{type:String,default:'REST'}
            }
        ]
    }
));