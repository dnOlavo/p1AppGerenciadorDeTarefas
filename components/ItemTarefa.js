import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Componente para exibir cada tarefa individualmente
export default function ItemTarefa({ tarefa, onEditarTarefa, onRemoverTarefa }) {
  const { id, nome, descricao, prioridade } = tarefa;

  return (
    <View style={estilos.item}>
      {/* Nome da tarefa */}
      <Text style={estilos.nome}>{nome}</Text>
      
      {/* Descrição da tarefa */}
      <Text style={estilos.descricao}>{descricao}</Text>
      
      {/* Prioridade da tarefa */}
      <Text style={estilos.prioridade}>Prioridade: {prioridade}</Text>
      
      {/* Botões para editar e remover a tarefa */}
      <View style={estilos.acoes}>
        <Button title="Editar" onPress={() => onEditarTarefa(id)} />
        <Button title="Excluir" onPress={() => onRemoverTarefa(id)} color="red" />
      </View>
    </View>
  );
}

// Estilos para cada tarefa
const estilos = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  descricao: {
    fontSize: 14,
    color: '#666',
  },
  prioridade: {
    marginTop: 5,
    fontStyle: 'italic',
  },
  acoes: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
