export default class QuoteService {
  constructor(quoteRepository) {
    this.quoteRepository = quoteRepository;
  }

  addQuote(text, author) {
    const quote = new this.quoteRepository.domain.Quote(text, author);
    this.quoteRepository.save(quote);
    return quote;
  }

  getAllQuotes() {
    return this.quoteRepository.findAll();
  }

  getRandomQuote() {
    const quotes = this.quoteRepository.findAll();
    if (quotes.length === 0) {
      throw new Error('No quotes available.');
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
}
