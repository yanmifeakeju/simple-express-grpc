import { RequestHandler } from 'express';
import { usersClient } from '../../../lib/grpc/client';

export const createUserHandler: RequestHandler = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    usersClient.createUser({ email, password, username }, (err, response) => {
      if (err) {
        res.status(500).json({ message: err.message });
      }

      const responsCode = response?.success ? 201 : 400;
      res.status(responsCode).json(response);
    });
  } catch (error) {
    res.status(500).json({ message: 'Error occured in creating user' });
  }
};
