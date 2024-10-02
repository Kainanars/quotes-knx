import express from 'express';
import bodyParser from 'body-parser';
import QuoteService from '../application/quoteService.js';
import QuoteRepository from '../infrastructure/quoteRepository.js';

const app = express();
const quoteRepository = new QuoteRepository();
const quoteService = new QuoteService(quoteRepository);

app.use(bodyParser.json());

app.post('/quotes', (req, res) => {
  try {
    const newQuote = quoteService.addQuote(req.body.text, req.body.author);
    res.status(201).json(newQuote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/quotes/random', (req, res) => {
  try {
    const randomQuote = quoteService.getRandomQuote();
    res.status(200).json(randomQuote);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.get('/quotes', (req, res) => {
  try {
    const allQuotes = quoteService.getAllQuotes();
    res.status(200).json(allQuotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default app;
