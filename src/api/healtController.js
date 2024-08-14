const express = require('express');
const router = express.Router();

// Variable para almacenar el tiempo de inicio de la aplicación
const startTime = Date.now();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Health check de la API
 *     description: Verifica el estado de la API y retorna el tiempo de ejecución junto con la marca de tiempo actual.
 *     responses:
 *       200:
 *         description: La API está en funcionamiento.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: El estado de la API.
 *                   example: ok
 *                 uptime:
 *                   type: number
 *                   description: El tiempo de ejecución de la aplicación en milisegundos.
 *                   example: 1234567
 *                 uptimeInMinutes:
 *                   type: number
 *                   description: El tiempo de ejecución de la aplicación en minutos.
 *                   example: 20
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                   description: La marca de tiempo actual en formato ISO.
 *                   example: "2024-08-12T15:30:00Z"
 */
router.get('/', (req, res) => {
  const uptime = Date.now() - startTime; // Calcula el tiempo de ejecución
  const uptimeInMinutes = Math.floor(uptime / 1000 / 60); // Convierte a minutos

  const timestamp = new Date().toISOString(); // Marca de tiempo actual en formato ISO

  res.status(200).json({
    status: 'ok',
    uptime,
    uptimeInMinutes,
    timestamp,
  });
});

module.exports = router;
