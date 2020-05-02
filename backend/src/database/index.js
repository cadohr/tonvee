import Sequelize from 'sequelize';

import sequelizeConfig from '../config/sequelize';

import User from '../app/models/User';
import Arena from '../app/models/Arena';

const models = [User, Arena];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(sequelizeConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }
}

export default new Database();
