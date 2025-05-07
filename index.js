require('dotenv').config();
const http = require('http');

function requestController(req, res) {
    // Encabezado para que el navegador entienda que es HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Enviar una vista HTML simple
    res.end(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
        <meta charset="UTF-8">
        <title>Servidor Node.js en Render</title>
        <style>
            body { font-family: sans-serif; text-align: center; margin-top: 50px; }
            h1 { color: green; }
        </style>
        </head>
        <body>
        <h1>🚀 ¡Aplicación Node.js desplegada con éxito en Render!</h1>
        <p>Puerto asignado dinámicamente: <strong>${process.env.PORT}</strong></p>
        </body>
        </html>
    `);
    console.log('Bienvenidos al curso');
}

const server = http.createServer(requestController);

const PORT = process.env.PORT;

server.listen(PORT, function() {
  console.log("Aplicacion corriendo en: " + PORT);
});