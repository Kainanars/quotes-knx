import Quote from '../domain/quoteService.js';

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
