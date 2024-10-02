import express, { json } from 'express';
import QuoteService from '../application/quoteService.js';
import QuoteRepository from '../infrastructure/quoteRepository.js';

const app = express();
const port = 7000;
app.use(json());

const quoteRepository = new QuoteRepository();
const quoteService = new QuoteService(quoteRepository);

app.post('/quotes', (req, res) => {
  const { text, author } = req.body;
  try {
    const quote = quoteService.addQuote(text, author);
    res.status(201).json(quote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/quotes/random', (req, res) => {
  try {
    const quote = quoteService.getRandomQuote();
    res.status(200).json(quote);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});
app.get('/quotes', (req, res) => {
  try {
    const quotes = quoteService.getAllQuotes();
    res.status(200).json(quotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
