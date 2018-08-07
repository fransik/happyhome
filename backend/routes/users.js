function listAll(req, res) {
  res.json([
    { id: 1, email: 'example.user@example.com' },
    { id: 2, email: 'example@test.net' }
  ]);
}

module.exports = { listAll };
