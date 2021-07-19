import { Request, Response } from 'express';
import CreateSessionsService from '../services/CreateSessionsService';
import { classToClass } from "class-transformer";

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {email, password} = request.body;

    const createSessions = new CreateSessionsService();

    const user = await createSessions.execute({
      email,
      password
    });

    return response.json(classToClass(user));
  }
}
