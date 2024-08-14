module.exports = {
  uri: process.env.DB_URI || 'mongodb://localhost:27017/lerumie',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
