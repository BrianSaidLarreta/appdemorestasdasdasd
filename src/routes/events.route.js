import express from 'express';
import {ENVIRONMENT} from "../ENV";

import
{
    GetZonesList,
    PostZone,
    PutZone,
    DelZone
} from '../controllers/events.controller';

const router=express.Router();
router.get(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.GET_ZONES_LIST,GetZonesList);
router.post(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.POST_ZONE,PostZone);
router.put(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.PUT_ZONE,PutZone);
router.delete(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.DEL_ZONE,DelZone);
module.exports=router;