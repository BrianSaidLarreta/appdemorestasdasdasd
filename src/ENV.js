export const ENVIRONMENT={
    SERVER_PORT:process.env.PORT||3001,
    BD_URL_CONNECTION: {
        TESTING:'',
        DEVELOPING: 'mongodb+srv://brian:1234@cluster0-ovt1a.mongodb.net/test?retryWrites=true',
    },
    ROUTES_MAIN_MODULES:{
        INDEX:'/',
        EVENTS:
        {
            NAME_ROUTE:'/api/events',
            ACTIONS:
            {
                GET_ZONES_LIST:'/getzoneslist',
                POST_ZONE:'/postzone',
                PUT_ZONE:'/putzone/:id',
                DEL_ZONE:'/delzone/:id'
            }
        }
    }
};
export const FORMATS_FOR_DATE_AND_TIME=(date=new Date())=>{
    return {
        DATE_STANDART:date,
        DATE_STRING:date.toDateString(),
        DATE_ISO:date.toISOString(),
        DATE_UTC:date.toUTCString(),
        TIME_STANDART:date.toTimeString(),
        DATE_TIME_SUBDOCUMENT:{
            DATE:{
                YEAR:date.getFullYear(),
                MONTH:date.getMonth()+1,
                DAY:date.getDate()
            },
            TIME:{
                HOUR:date.getHours(),
                MINUTES:date.getMinutes(),
                SECONDS:date.getSeconds()
            }
        },
        DATE:{
            YEAR:date.getFullYear(),
            MONTH:date.getMonth()+1,
            DAY:date.getDate()
        },
        TIME:{
            HOUR:date.getHours(),
            MINUTES:date.getMinutes(),
            SECONDS:date.getSeconds()
        },
        DAY_WEEK:{
            NUMBER:date.getDate(),
            TEXT:GET_DAY_WEEK_TEXT(date.getDay())
        }
    }
};
export const GET_DAY_WEEK_TEXT = (day) =>{
    switch(day){
        case 1:
            return "LUNES";
        case 2:
            return "MARTES";
        case 3:
            return "MIERCOLES";
        case 4:
            return "JUEVES";
        case 5:
            return "VIERNES";
        case 6:
            return "SABADO";
        case 7:
            return "DOMINGO";
    }
};