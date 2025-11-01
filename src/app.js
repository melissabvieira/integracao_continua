// src/app.js 

const express = require('express'); 

const app = express(); 

const port = process.env.PORT || 3000; // Define a porta, padrão 3000 

 

app.get('/', (req, res) => { 

  res.send('Hello from CI/CD App!'); 

}); 

 

// Função para ser testada unitariamente 

function getWelcomeMessage() { 

  return 'Welcome to the CI/CD pipeline!'; 

} 

 

// Exporta o app e a função para serem usados nos testes 

module.exports = { app, getWelcomeMessage, port }; 

 

// Inicia o servidor apenas se o arquivo for executado diretamente 

if (require.main === module) { 

  app.listen(port, () => { 

    console.log('Server listening on port ${port}'); 

  }); 

}     