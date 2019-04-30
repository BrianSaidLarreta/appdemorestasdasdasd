import {FORMATS_FOR_DATE_AND_TIME} from "../ENV";
import Cat_zonas from '../models/cat_zonas.model';

exports.GetZonesList=async (req,res)=>{
    await Cat_zonas.find()
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                        :res.status(404).send("No se encontraron Zonas");
            }
        )
        .catch
        (err =>
            {
                return res.status(500).send(err);
            }
        )
};