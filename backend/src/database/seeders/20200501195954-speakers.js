const { v4: uuid } = require('uuid');
const { hashSync } = require('bcryptjs');

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          id: uuid(),
          name: 'Speaker 1',
          email: 'speaker1@tonvee.com',
          type: 'speaker',
          password_hash: hashSync('tonvee3211', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuid(),
          name: 'Speaker 2',
          email: 'speaker2@tonvee.com',
          type: 'speaker',
          password_hash: hashSync('tonvee3212', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuid(),
          name: 'Speaker 3',
          email: 'speaker3@tonvee.com',
          type: 'speaker',
          password_hash: hashSync('tonvee3213', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuid(),
          name: 'Speaker 4',
          email: 'speaker4@tonvee.com',
          type: 'speaker',
          password_hash: hashSync('tonvee3214', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
