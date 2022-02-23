const express = require('express');
const PORT = 3001;
const app = express();
const data = require('./data.json');
const cors = require('cors');
const corsOptions = {
	origin: '*',
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get('/recipes/all', (req, res) => {
	res.send(data);
});

app.get('/recipes/:id', (req, res) => {
	const targetId = req.params.id;

	for (let i = 0; i < data.length; i++) {
		if (data[i].id === targetId) {
			return res.send(data[i]);
		}
	}
	res.json({ message: 'ID not found' });
});

app.listen(PORT, () => {
	console.log(`Recipe API running on ${PORT}`);
});
