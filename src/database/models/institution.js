
export default (sequelize, DataTypes) => {
  return sequelize.define('Institution', {
    name: {
      field: 'Name',
      type: DataTypes.STRING,
    },
    code: {
      field: 'Code',
      type: DataTypes.STRING,
    },
    shortName: {
      type: DataTypes.STRING,
      field: 'ShortName',
    },
    emailPostFIx: {
      field: 'EmailPostFix',
      type: DataTypes.STRING,
    },
    status: {
      field: 'Status',
      type: DataTypes.ENUM,
      values: ['ACTIVE', 'INACTIVE', 'DISABLED'],
      defaultValue: 'ACTIVE',
    }
  },
  {
    paranoid: true,
  });
};
