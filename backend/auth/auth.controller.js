const express = require('express');

const { passport } = require('./index');
const authService = require('./auth.service');

const router = express.Router();

router.post(
  '/email',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const { user } = req;
      const accessToken = await authService.generateAndStoreToken(user.id);
      res.json({ accessToken, user });
    } catch (e) {
      next(e);
    }
  }
);

module.exports = router;
