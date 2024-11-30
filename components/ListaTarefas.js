import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ItemTarefa from './ItemTarefa';

// Componente para exibir a lista de tarefas
export default function ListaTarefas({ tarefas, onEditarTarefa, onRemoverTarefa }) {
  return (
    <FlatList
      data={tarefas} // Lista de tarefas para renderizar
      keyExtractor={(item) => item.id} // Chave única para cada tarefa
      renderItem={({ item }) => (
        <ItemTarefa
          tarefa={item}
          onEditarTarefa={onEditarTarefa}
          onRemoverTarefa={onRemoverTarefa}
        />
      )}
      style={estilos.lista}
    />
  );
}

// Estilos para a lista de tarefas
const estilos = StyleSheet.create({
  lista: {
    marginTop: 10,
  },
});
