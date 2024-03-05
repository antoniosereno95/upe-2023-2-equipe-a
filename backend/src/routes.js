
const express = require("express");
const Routes = express.Router(); //variavel para chamada do Router
const { PrismaClient } = require("@prisma/client");
const { response } = require("express");
const prisma = new PrismaClient();

//CRUD Questoes -> Rotas do CRUD para Questoes
//C
Routes.post("/CriarQuestoes", async (request, response) => {
  const { titulo, Alternativas,resposta  } = request.body;
  //Questoes.push({ titulo });
  const novaQuestao = await prisma.questao.create({
    data: {
      titulo: titulo,
      Alternativas: Alternativas,
      resposta: resposta
    }
  });
  return response.status(201).json(novaQuestao);
});

Routes.get("/listarTodasQuestoes" , async (request, response) => {

  const listaTodasQestoes = await prisma.questao.findMany();

  return response.status(200).json(listaTodasQestoes);
})

// U
Routes.put("/UpdateQuestao", async (request, response) => {
  const { id, titulo, Alternativas, resposta } = request.body;

  try {
    const intId = parseInt(id);

    if (!intId) {
      return response.status(400).json("Id é obrigatório");
    }

    const QuestaoExiste = await prisma.questao.findUnique({
      where: { id: intId },
    });

    if (!QuestaoExiste) {
      return response.status(404).json("Questão não existe");
    }

    const update = await prisma.questao.update({
      where: { id: intId },
      data: {
        titulo: titulo,
        Alternativas: Alternativas,
        resposta: resposta,
      },
    });

    return response.status(200).json(update);
  } catch (error) {
    console.error("Erro ao atualizar questão:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
});

// D
Routes.delete("/DeletarQuestao/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const intId = parseInt(id);

    if (!intId) {
      return response.status(400).json("Id é obrigatório");
    }

    const QuestaoExiste = await prisma.questao.findUnique({
      where: { id: intId },
    });

    if (!QuestaoExiste) {
      return response.status(404).json("Questão não existe");
    }

    await prisma.questao.delete({ where: { id: intId } });

    return response.status(200).send();
  } catch (error) {
    console.error("Erro ao deletar questão:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
});

//CRUD Alternativas -> Rotas do CRUD para Alternativas
//C
Routes.post("/CriarAlternativa", async (request, response) => {
  const { texto, letra } = request.body;
  
  try {
    const novaAlternativa = await prisma.alternativa.create({
      data: {
        texto: texto,
        letra: letra
      }
    });
    return response.status(201).json(novaAlternativa);
  } catch (error) {
    console.error("Erro ao criar alternativa:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
});

//R
Routes.get("/listarTodasAlternativas", async (request, response) => {
  try {
    const todasAsAlternativas = await prisma.alternativa.findMany();
    return response.status(200).json(todasAsAlternativas);
  } catch (error) {
    console.error("Erro ao listar todas as alternativas:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
});


//CRUD Prova  -> Rotas do CRUD para provas
//C
Routes.post("/CriarProva", async (request, response) => {
  const { titulo, data, disciplina } = request.body;
  
  try {
    const novaProva = await prisma.prova.create({
      data: {
        titulo: titulo,
        data: data,
        disciplina: disciplina
      }
    });
    return response.status(201).json(novaProva);
  } catch (error) {
    console.error("Erro ao criar prova:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
});

 //R
Routes.get("/listarTodasProvas", async (request, response) => {
  try {
    const todasAsProvas = await prisma.prova.findMany();
    return response.status(200).json(todasAsProvas);
  } catch (error) {
    console.error("Erro ao listar todas as provas:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
});

module.exports = Routes; // exportando as rotas