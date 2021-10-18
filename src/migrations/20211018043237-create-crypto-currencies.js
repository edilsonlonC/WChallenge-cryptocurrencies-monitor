export default  {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('crypto_currencies', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'SET NULL'
      },
      deletedAt: {
        type: Sequelize.DATE
      } 
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('crypto_currencies');
  }
};