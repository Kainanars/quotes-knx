import Quote from './quote.js';

describe('Quote', () => {
  it('should create an instance of Quote with valid text and author', () => {
    const text = 'To be or not to be';
    const author = 'William Shakespeare';
    const quote = new Quote(text, author);

    expect(quote.text).toBe(text);
    expect(quote.author).toBe(author);
  });

  it('should throw an error if text is missing', () => {
    const author = 'William Shakespeare';

    expect(() => new Quote('', author)).toThrow(
      'Text and author are required.'
    );
  });

  it('should throw an error if author is missing', () => {
    const text = 'To be or not to be';

    expect(() => new Quote(text, '')).toThrow('Text and author are required.');
  });

  it('should throw an error if both text and author are missing', () => {
    expect(() => new Quote('', '')).toThrow('Text and author are required.');
  });
});
