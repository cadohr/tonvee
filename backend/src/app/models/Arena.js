import Sequelize, { Model } from 'sequelize';
import { v4 as uuid } from 'uuid';

class Arena extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        slug: Sequelize.STRING,
      },
      { sequelize },
    );

    this.addHook('beforeSave', async (arena) => {
      if (!arena.id) {
        arena.id = uuid();
      }
    });

    return this;
  }
}

export default Arena;
