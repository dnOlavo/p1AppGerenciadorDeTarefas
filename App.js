import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FormularioTarefa from './components/FormularioTarefa';
import ListaTarefas from './components/ListaTarefas';

// Componente principal do aplicativo
export default function App() {
  const [tarefas, setTarefas] = useState([]); // Estado para armazenar a lista de tarefas

  // Função para adicionar uma nova tarefa
  const adicionarTarefa = (tarefa) => setTarefas([...tarefas, tarefa]);

  // Função para editar uma tarefa existente
  const editarTarefa = (id, tarefaAtualizada) => {
    setTarefas(tarefas.map((tarefa) => (tarefa.id === id ? tarefaAtualizada : tarefa)));
  };

  // Função para remover uma tarefa
  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  return (
    <View style={estilos.container}>
      {/* Formulário para adicionar/editar tarefas */}
      <FormularioTarefa onAdicionarTarefa={adicionarTarefa} />
      
      {/* Lista de tarefas com funcionalidades de edição e exclusão */}
      <ListaTarefas
        tarefas={tarefas}
        onEditarTarefa={editarTarefa}
        onRemoverTarefa={removerTarefa}
      />
    </View>
  );
}

// Estilos do componente principal
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
});
