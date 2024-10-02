import QuoteRepository from './quoteRepository.js';

describe('QuoteRepository', () => {
  let quoteRepository;

  beforeEach(() => {
    quoteRepository = new QuoteRepository();
  });

  test('should initialize with an empty quotes array', () => {
    expect(quoteRepository.findAll()).toEqual([]);
  });

  test('should save a quote', () => {
    const quote = { text: 'This is a test quote', author: 'Test Author' };
    quoteRepository.save(quote);
    expect(quoteRepository.findAll()).toContain(quote);
  });

  test('should return all saved quotes', () => {
    const quote1 = { text: 'First quote', author: 'Author 1' };
    const quote2 = { text: 'Second quote', author: 'Author 2' };
    quoteRepository.save(quote1);
    quoteRepository.save(quote2);
    expect(quoteRepository.findAll()).toEqual([quote1, quote2]);
  });
});
