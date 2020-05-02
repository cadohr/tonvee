const { v4: uuid } = require('uuid');

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'arenas',
      [
        {
          id: uuid(),
          name: 'Arena Tech',
          slug: 'arena-tech',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuid(),
          name: 'Arena Inovação',
          slug: 'arena-inovacao',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuid(),
          name: 'Arena Finanças',
          slug: 'arena-financas',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuid(),
          name: 'Arena Vajero',
          slug: 'arena-varejo',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('arenas', null, {});
  },
};
