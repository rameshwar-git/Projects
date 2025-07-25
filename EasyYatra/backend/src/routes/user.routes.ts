import express from 'express';
import { createRide, createRider, getRide, getRider } from '../controllers/user.ride.controller';
import { getUser } from '../controllers/user.controller';
import { get } from 'http';

const router = express.Router();

router.post('/userRide', createRide);
router.post('/userRider', createRider);

router.get('/userRide/:id', getRide);
router.get('/userRider/:id', getRider);
router.get('/user/:id', getUser);

export default router;