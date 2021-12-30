const mongoose = require('mongoose');
require('dotenv').config();
const db = process.env.MONGOURI;
const app = require('./server');
const port = process.env.PORT || process.env.PORT1;
try {
  mongoose.connect(
    db,
    {
      useNewUrlParser: true
    }
  ).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  });

  console.log('MongoDB is Connected...');
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
