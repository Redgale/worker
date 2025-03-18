module.exports = async (req, res) => {
    // Block all incoming traffic
    res.status(403).send('Access blocked');
  };
  