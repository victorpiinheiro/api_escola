class HomeControler {
  async index(req, res) {
    res.json('ok');
  }
}

export default new HomeControler();
