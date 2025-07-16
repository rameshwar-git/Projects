import express from 'express';
import { createRide, createRider } from '../controllers/user.controller';

const router = express.Router();

router.post('/userRide', createRide);
router.post('/userRider', createRider);


export default router;