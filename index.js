const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Porta dinâmica

const posts = Array.from({ length: 30 }, (v, i) => ({
  id: i + 1,
  content: `Este é o post número ${i + 1}!`,
  url: `https://via.placeholder.com/150?text=Post+${i + 1}`,
  likes: Math.floor(Math.random() * 100),
  comments: Math.floor(Math.random() * 20),
  saves: Math.floor(Math.random() * 10),
}));

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
