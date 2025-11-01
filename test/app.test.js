// test/app.test.js 

const { getWelcomeMessage } = require('../src/app'); 

 

// Teste unitário para a função getWelcomeMessage 

test('getWelcomeMessage should return "Welcome to the CI/CD pipeline!"', () => { 

  expect(getWelcomeMessage()).toBe('Welcome to the CI/CD pipeline!'); 

}); 