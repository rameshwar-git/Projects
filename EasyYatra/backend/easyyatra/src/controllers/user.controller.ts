import traveller from '../models/user/user.ride';
import rider from '../models/user/user.rider';
import { Request, Response } from 'express';

export const createRide = async (req: Request, res: Response) => {
  const { uid, name, email, password, contact } = req.body;
  try {
    const userTraveller = await traveller.create({ 
      uid,
      name,
      email,
      password,
      contact,
      role: 'ride'
    });
    res.status(201).json(userTraveller);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const createRider = async (req: Request, res: Response) => {
  const { uid, name, email, password, contact, vehicleType, vehicleNumber, vehicleModel, vehicleColor } = req.body;
  try {
    const userRider = await rider.create({ 
      uid,
      name,
      email,
      password,
      contact,
      role: 'rider',
      vehicleType,
      vehicleNumber,
      vehicleModel,
      vehicleColor
    });
    res.status(201).json(userRider);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};