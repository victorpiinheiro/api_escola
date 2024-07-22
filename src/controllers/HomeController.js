import Aluno from '../models/Aluno';

class HomeControler {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Luiz',
      sobrenome: 'pineurio',
      email: 'victor#gmail.com',
      idade: 18,
      peso: 300,
      altura: 2.5,
    });
    res.json(novoAluno);
  }
}

export default new HomeControler();
