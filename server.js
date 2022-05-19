const express = require('express')
const app = express()
const port = 3000;
const path = require('path');
const {sequelize} = require('./models');
const {rootRoute} = require('./router');

// cau hinh project voi json
app.use(express.json())

const directotyUrl = path.join(__dirname, './public');
app.use(express.static(directotyUrl));




app.use('/students', rootRoute);


app.listen(port, async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  console.log(`Example app listening on port ${port}`)
})