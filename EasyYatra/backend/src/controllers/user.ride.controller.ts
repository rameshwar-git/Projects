import ride from '../models/user/user.ride';
import rider from '../models/user/user.rider';
import status from '../models/user.status';
import '../enums/StatusCode';

import { Request, Response } from 'express';


//Ride Regestration
export const createRide = async (req: Request, res: Response) => {
  try {
    const userRide = await ride.create({...req.body});
    // New user status creation
    await createStatus(req, res, userRide._id);
    
    res.status(201).json(userRide);

  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
//Rider Registration
export const createRider = async (req: Request, res: Response) => {
  try {
    const userRider = await rider.create({...req.body});
    // New user status creation
    await createStatus(req, res, userRider._id);
    res.status(201).json(userRider);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

//Create User Status
const createStatus = async (req: Request, res: Response ,id:any) => {
  try {
    const userStatus = await status.create({...req.body, userId: id});
    res.status(201).json(userStatus);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getRide = async (req: Request, res: Response) => {
  try {
    const rides = await ride.findById(req.params.id || {});
    res.status(200).json(rides);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getRider = async (req: Request, res: Response) => {
  try {
    const riders = await rider.findById(req.params.id || {});
    res.status(200).json(riders);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};