export default class Quote {
  constructor(text, author) {
    if (!text || !author) {
      throw new Error('Text and author are required.');
    }
    this.text = text;
    this.author = author;
  }
}
