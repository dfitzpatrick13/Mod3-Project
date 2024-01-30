
const express = require('express');
const mongoose = require('mongoose');
cons
mongoose.connect('mongodb+srv://danfitz156:12345@cluster0.yyfxne3.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
