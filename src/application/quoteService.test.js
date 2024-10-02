import QuoteService from './quoteService.js';

describe('QuoteService', () => {
  let quoteRepositoryMock;
  let quoteService;

  beforeEach(() => {
    quoteRepositoryMock = {
      domain: {
        Quote: jest.fn((text, author) => ({ text, author })),
      },
      save: jest.fn(),
      findAll: jest.fn(),
    };
    quoteService = new QuoteService(quoteRepositoryMock);
  });

  test('should add a quote', () => {
    const text = 'Test quote';
    const author = 'Test author';
    const quote = { text, author };

    quoteService.addQuote(text, author);

    expect(quoteRepositoryMock.domain.Quote).toHaveBeenCalledWith(text, author);
    expect(quoteRepositoryMock.save).toHaveBeenCalledWith(quote);
  });

  test('should get all quotes', () => {
    const quotes = [
      { text: 'Quote 1', author: 'Author 1' },
      { text: 'Quote 2', author: 'Author 2' },
    ];
    quoteRepositoryMock.findAll.mockReturnValue(quotes);

    const result = quoteService.getAllQuotes();

    expect(result).toEqual(quotes);
    expect(quoteRepositoryMock.findAll).toHaveBeenCalled();
  });

  test('should get a random quote', () => {
    const quotes = [
      { text: 'Quote 1', author: 'Author 1' },
      { text: 'Quote 2', author: 'Author 2' },
    ];
    quoteRepositoryMock.findAll.mockReturnValue(quotes);

    const result = quoteService.getRandomQuote();

    expect(quotes).toContain(result);
    expect(quoteRepositoryMock.findAll).toHaveBeenCalled();
  });

  test('should throw an error when no quotes are available', () => {
    quoteRepositoryMock.findAll.mockReturnValue([]);

    expect(() => quoteService.getRandomQuote()).toThrow('No quotes available.');
    expect(quoteRepositoryMock.findAll).toHaveBeenCalled();
  });
});
