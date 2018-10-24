module.exports = (sequelize, DataTypes) => {
  const ChatBox = sequelize.define("ChatBox", {
    body: {
      type: DataTypes.TEXT
    },
    subject: {
      type: DataTypes.STRING
    }
  });

  ChatBox.associate = models => {
    ChatBox.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return ChatBox;
};
