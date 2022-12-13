import { Content } from './content';

describe('Notificantion content', () => {
  it('should be able to crate a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('should not be able to crate a notification conten with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to crate a notification conten with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
