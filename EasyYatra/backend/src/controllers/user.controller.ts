import status from '../models/user.status';

import { Request, Response } from 'express';

export const getUser = async (req: Request, res: Response) => {
  try {
    const userStatus = await status.find({ userId: req.params.id });
    res.status(200).json(userStatus);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};