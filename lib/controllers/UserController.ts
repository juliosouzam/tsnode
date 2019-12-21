import { Request, Response } from 'express'

import User from '../models/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find({})

    return res.json(users)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user)
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const user = await User.findById(id)

    return res.json(user)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    let user = await User.findOneAndUpdate(id, req.body)
    user = await User.findById(id)

    return res.json(user)
  }

  public async destroy (req: Request, res: Response) :Promise<Response> {
    const { id } = req.params
    await User.findOneAndDelete(id)

    return res.json()
  }
}

export default new UserController()
