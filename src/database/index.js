import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Aluno from '../models/Aluno';

const connection = new Sequelize(databaseConfig);
const models = [Aluno];

models.forEach((model) => model.init(connection));

export default connection;
