import User from '../models/User';

class UserController {
  // store = cria um usuario
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
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
      console.log('User id', req.userId);
      console.log('User email', req.userEmail);
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // show =  mostra um usuario
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // update = alterar usuario
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(201).json({
          errors: ['Usuario nao existe'],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // delete

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        res.status(400).json({
          errors: ['Usuario nao existe'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((erro) => erro.message),
      });
    }
  }
}

export default new UserController();
