const express = require('express')
const router = express.Router()
const { getTareas, crearTareas, updateTareas, deleteTareas } = require('../controllers/tareasController')

router.get('/', getTareas)


router.get('/', (req, res) => {
    res.status(200).json({ message:'Get Tareas' })
})

router.post('/', (req, res) => {
    res.status(201).json({ message:'Crear  Tareas' })
})

router.put('/:id', (req, res) => {
    res.status(200).json({ message:`Actualizar la tarea con id: ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Eliminar la tarea con id: ${req.params.id}` })
})

module.exports = router

