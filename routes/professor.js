const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

router.get('/', professorController.obterTodos);
router.get('/:id', professorController.obterPorId);
router.get('/:id/turmas', professorController.obterTurmasPorId);
router.put('/:id', professorController.editarProfessor);
router.post('/:id/turmas', professorController.adicionarTurma);
router.get('/departamento/:departamento', professorController.obterPorDepartamento);
router.delete('/:id', professorController.deletarProfessor);

module.exports = router;