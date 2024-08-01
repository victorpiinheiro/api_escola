import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Aluno from '../models/Aluno';
import User from '../models/User';

const connection = new Sequelize(databaseConfig);
const models = [Aluno, User];

models.forEach((model) => model.init(connection));

export default connection;
