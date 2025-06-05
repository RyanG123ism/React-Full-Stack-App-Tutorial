const express = require('express');
const app = express();

app.use(express.json()); //middleware to parse JSON bodies

//path to models folder where all tables are defined
const db = require('./models'); 

//routers
const postRouter = require('./routes/Posts');

//middleware for routers
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
