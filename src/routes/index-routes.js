const { Router } = require('express');
const path = require('path');
const router = Router();

// Rutas
router.get('/', (req, res) => {
    res.render('index');
});

router.post('/upload', (req, res) => {
    res.send('Imagen subida');
});

module.exports = router;