module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e28829fb20a6bb5b6b406af30b44e0b8'),
  },
});
