# Paso 1: Usar una imagen base de Node.js
FROM node:16

# Paso 2: Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Paso 3: Copiar el archivo package.json y package-lock.json (si existe) al contenedor
COPY package*.json ./

# Paso 4: Instalar las dependencias de Node.js
RUN npm install

# Paso 5: Copiar el resto del código fuente al contenedor
COPY . .

# Paso 6: Exponer el puerto en el que la aplicación estará escuchando
EXPOSE 3000

# Paso 7: Ejecutar la aplicación
CMD ["node", "src/app.js"]
