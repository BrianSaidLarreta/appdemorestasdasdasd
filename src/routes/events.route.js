import express from 'express';
import {ENVIRONMENT} from "../ENV";

import
{
    GetZonesList
} from '../controllers/events.controller';

const router=express.Router();
router.get(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.GET_ZONES_LIST,GetZonesList);
module.exports=router;