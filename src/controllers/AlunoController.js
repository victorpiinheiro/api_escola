import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      if (!aluno) {
        return res.status(400).json({
          errors: ['erro ao criar o aluno'],
        });
      }

      const {
        id, nome, peso, altura, email, sobrenome,
      } = aluno;

      return res.status(200).json({
        id, nome, sobrenome, email, peso, altura,
      });
    } catch (e) {
      console.log({ errors: e.errors.map((err) => err.message) });
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),

      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['faltando ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno nao encontrado'],
        });
      }

      const {
        nome, peso, altura, email, sobrenome,
      } = aluno;

      return res.status(200).json({
        id, nome, sobrenome, email, peso, altura,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),

      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['faltando ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno nao encontrado'],
        });
      }

      const novosDados = await aluno.update(req.body);
      const {
        nome, sobrenome, email, peso, altura,
      } = novosDados;
      return res.status(200).json({
        nome, sobrenome, email, peso, altura,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),

      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['faltando ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno nao encontrado'],
        });
      }

      await aluno.destroy();
      return res.status(200).json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),

      });
    }
  }
}

export default new AlunoController();
