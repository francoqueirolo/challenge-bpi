# Base image
FROM node:latest

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de la aplicación al contenedor
COPY . .

# Instalar dependencias
RUN npm install

# Construir la aplicación
RUN npm run build --prod

# Puerto de exposición
EXPOSE 80

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]
