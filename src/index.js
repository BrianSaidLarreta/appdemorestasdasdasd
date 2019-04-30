import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import {ENVIRONMENT} from "./ENV";
import routesEvents from './routes/events.route';
var allowCrossDomain=function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
};
const app=express().use(bodyparser.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(allowCrossDomain);
app.listen(ENVIRONMENT.SERVER_PORT,async()=>{
    try{
        app.use(allowCrossDomain);
        console.log("Express ejecutado correctamente");
        mongoose.connect(ENVIRONMENT.BD_URL_CONNECTION.DEVELOPING,{useNewUrlParser:true})
            .then(()=>{
                console.log('Successful connection to MongoDB');
                app.get(ENVIRONMENT.ROUTES_MAIN_MODULES.INDEX,(req,res)=>{
                    res.status(200);
                    res.send("¡Hola Mundo!"+"</br>"+
                        "¡Successful Connection to MongoDB"+"</br>"+
                        "¡Server Web APIs - REST DEMO - ON LINE!"
                    );
                    res.end();
                });
                app.use(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.NAME_ROUTE,routesEvents);
            }).catch(err=>{
                app.get(ENVIRONMENT.ROUTES_MAIN_MODULES.INDEX,(req,res)=>{
                    res.status(500).send('error',{'error':err});
                    res.end();
                });
            });
    }
    catch (err) {
        app.get(ENVIRONMENT.ROUTER_MAIN_MODULES.INDEX,(req,res)=>{
            res.status(500).send('error',{'error':err});
            res.end();
        });
    }
});

