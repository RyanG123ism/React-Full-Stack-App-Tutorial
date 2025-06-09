const express = require('express'); //import express to create the server
const app = express(); //create an instance of express
const cors = require('cors'); //import cors to allow cross-origin requests

app.use(express.json()); //middleware to parse JSON bodies
app.use(cors()); //middleware to enable CORS


//path to models folder where all tables are defined
const db = require('./models'); 

//routers
const postRouter = require('./routes/Posts');

//middleware for routers
app.use("/posts", postRouter);

//syncs database and then starts the server once the database is ready
//if PORT is not defined in environment variables, it defaults to 3000
db.sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
