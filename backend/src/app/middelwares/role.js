export default (role) => (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const hasRole = role === req.user.type;
  if (!hasRole) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  return next();
};
