import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

const connection = new Sequelize(databaseConfig);
const models = [Aluno, User, Foto];

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

export default connection;
