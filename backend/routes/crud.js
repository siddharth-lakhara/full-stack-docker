const db = require('../models');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    options: {
      cors: true,
    },
    handler: () => {
      return db.users.findAll();
    }
  },
  {
    method: 'POST',
    path: '/users',
    handler: async (req, h) => {
      const {userName, comment} = req.payload;
      try {
        await db.users.create({
          username: userName,
          comment
        });
        return 'Success';
      } catch (e) {
        return h.response('Failed').code(500);
      }
    }
  },
];