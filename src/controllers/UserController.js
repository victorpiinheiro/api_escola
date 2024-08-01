import User from '../models/User';

class UserController {
  // store = cria um usuario
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({

        errors: e.errors.map((erro) => erro.message),
      });
    }
  }

  // index = lista os usuarios
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // show =  mostra um usuario
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  // update = alterar usuario
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(201).json({
          errors: ['ID NAO ENVIADO'],
        });
      }

      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(201).json({
          errors: ['Usuario nao existe'],
        });
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.json(null);
    }
  }

  // delete

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(201).json({
          errors: ['ID NAO ENVIADO'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        res.status(400).json({
          errors: ['Usuario nao existe'],
        });
      }

      await user.destroy();
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((erro) => erro.message),
      });
    }
  }
}

export default new UserController();
