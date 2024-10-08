import Quote from '../domain/quote.js';

export default class QuoteRepository {
  constructor() {
    this.quotes = [];
    this.domain = { Quote };
  }

  save(quote) {
    this.quotes.push(quote);
  }

  findAll() {
    return this.quotes;
  }
}
