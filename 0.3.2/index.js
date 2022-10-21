const tarefas = [
  {
    titulo: 'Passear com o cachorro',
    concluida: false,
    dias: 10,
  },
  {
    titulo: 'Comprar leite',
    concluida: false,
    dias: 5,
  },
  {
    titulo: 'Lavar louça',
    concluida: true,
    dias: 60,
  },
];

function filtrarTarefasConcluidas() {
  const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida);
  return filtrarTarefasConcluidas;
}

function filtrarTarefasNaoConcluidas() {
  const tarefasNaoConcluidas = tarefas.filter(
    (tarefa) => tarefa.Nconcluida === false
  );
  return filtrarTarefasNaoConcluidas;
}

function filtrartarefasCriadasConcluidas30Dias() {
  const tarefasCriadasConcluidas30Dias = tarefas.filter(
    (tarefa) => tarefa.dias <= 30 && tarefas.concluida === true
  );

  return tarefasCriadasConcluidas30Dias;
}

console.log(filtrarTarefasConcluidas);
console.log(filtrarTarefasNaoConcluidas);
console.log(filtrartarefasCriadasConcluidas30Dias);
