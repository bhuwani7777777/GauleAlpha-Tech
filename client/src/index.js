const express = require('express');
const cors = require('cors'); // Install with: npm install cors
const app = express();

// Allow requests from React app (running on port 3000)
app.use(cors({ origin: 'http://localhost:3000' }));

// Your API route
app.get('/api/services', (req, res) => {
  res.json([{ name: 'Cloud Solutions' }, { name: 'Cybersecurity' }]);
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));