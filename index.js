const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors");

app.use(cors()); // Habilita CORS para todas as origens

// Criando 30 posts de exemplo
const posts = Array.from({ length: 30 }, (v, i) => ({
  id: i + 1,
  content: `Este é o post número ${i + 1}!`,
  url: `https://via.placeholder.com/150?text=Post+${i + 1}`,
  likes: Math.floor(Math.random() * 100),
  comments: Math.floor(Math.random() * 20),
  saves: Math.floor(Math.random() * 10),
}));

// Função para embaralhar os posts
const shuffleArray = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Rota para buscar posts aleatórios
app.get('/api/posts', (req, res) => {
  const { limit = 10 } = req.query;
  const randomPosts = shuffleArray(posts, parseInt(limit));
  res.json({ data: randomPosts });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
