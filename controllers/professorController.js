const professorModel = require('../models/professor');

exports.obterTodos = async (req, res) => {
    try {
        const professor = await professorModel.find();
        res.status(200).json(professor);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

exports.obterPorId = async (req, res) => {
    try {
        const professor = await professorModel.findOne({ id: req.params.id });
        res.status(200).json(professor);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

exports.obterTurmasPorId = async (req, res) => {
    try {
        const professor = await professorModel.findOne({ id: req.params.id });
        res.status(200).json(professor.turmas);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

exports.editarProfessor = async (req, res) => {
    try {
        const professor = await professorModel.findOne({ id: req.params.id });
        if (!professor) {
            return res.status(404).json({ message: 'Professor não encontrado' });
        }
        professor.nome = req.body.nome;
        professor.idade = req.body.idade;
        professor.departamento = req.body.departamento;
        await professor.save();
        res.status(200).json(professor);
    } catch (error) {
        res.status(400).json({error});
    }
};

exports.adicionarTurma = async (req, res) => {
    try {
        const professor = await professorModel.findOne({ id: req.params.id });

        if (!professor) {
            return res.status(404).json({ message: 'Professor não encontrado' });
        }

       
        const novaTurma = {
            codigo: req.body.codigo,
            disciplina: req.body.disciplina,
            alunos: req.body.alunos 
        };

        
        professor.turmas.push(novaTurma);

        await professor.save(); 

        res.status(200).json(professor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.obterPorDepartamento = async (req, res) => {
    const departamento = req.params.departamento;
    try {
        const professor = await professorModel.find({departamento});
        res.status(200).json(professor);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};


exports.deletarProfessor = async (req, res) => {
    try {
        const professor = await professorModel.findOneAndDelete(req.params.departamento);
        res.status(200).json(professor);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};