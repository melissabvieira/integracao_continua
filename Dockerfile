# Dockerfile 

# Imagem base do Node.js 

FROM node:20-alpine 

 

# Define o diretório de trabalho dentro do container 

WORKDIR /app 

 

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho 

# (importante para que o Docker possa cachear a camada de instalação de dependências) 

COPY package*.json ./ 

 

# Instala as dependências do projeto 

RUN npm install --omit=dev # Instala apenas as dependências de produção 

 

# Copia o restante do código da aplicação para o diretório de trabalho 

COPY . . 

 

# Expõe a porta que a aplicação Express irá escutar 

EXPOSE 3000 

 

# Comando para iniciar a aplicação quando o container for executado 

CMD ["node", "src/app.js"] 
