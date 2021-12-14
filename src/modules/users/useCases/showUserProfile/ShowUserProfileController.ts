import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const users = this.showUserProfileUseCase.execute()
    return response.status(200).json(users)
  }
}

export { ShowUserProfileController };
