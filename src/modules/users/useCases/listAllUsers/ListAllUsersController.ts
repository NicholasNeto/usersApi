import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const user_id = ( request.headers['user_id'] ) as string
    const users = this.listAllUsersUseCase.execute( { user_id })

    if (users.length < 0) {
      return response.status(400).json('Erro, for request need valid user')
    }

    return response.status(200).json(users)
  }
}

export { ListAllUsersController };
