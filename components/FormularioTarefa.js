import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

// Componente para o formulário de adicionar/editar tarefa
export default function FormularioTarefa({ onAdicionarTarefa }) {
  const [nome, setNome] = useState(''); // Estado para o nome da tarefa
  const [descricao, setDescricao] = useState(''); // Estado para a descrição da tarefa
  const [prioridade, setPrioridade] = useState('Baixa'); // Estado para a prioridade da tarefa

  // Função chamada ao enviar o formulário
  const handleSubmit = () => {
    if (nome.trim() === '') return; // Validação para evitar tarefas sem nome
    onAdicionarTarefa({
      id: Date.now().toString(), // Geração de ID único
      nome,
      descricao,
      prioridade,
    });
    // Resetar os campos do formulário
    setNome('');
    setDescricao('');
    setPrioridade('Baixa');
  };

  return (
    <View style={estilos.formulario}>
      {/* Campo de entrada para o nome da tarefa */}
      <TextInput
        style={estilos.input}
        placeholder="Nome da Tarefa"
        value={nome}
        onChangeText={setNome}
      />

      {/* Campo de entrada para a descrição */}
      <TextInput
        style={estilos.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <Text style={estilos.rotulo}>Prioridade:</Text>
      
      {/* Botões para seleção da prioridade */}
      <View style={estilos.containerPrioridades}>
        {['Alta', 'Média', 'Baixa'].map((nivel) => (
          <Button
            key={nivel}
            title={nivel}
            onPress={() => setPrioridade(nivel)}
            color={prioridade === nivel ? 'blue' : 'gray'}
          />
        ))}
      </View>

      {/* Botão para adicionar a tarefa */}
      <Button title="Adicionar Tarefa" onPress={handleSubmit} />
    </View>
  );
}

// Estilos para o formulário
const estilos = StyleSheet.create({
  formulario: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  rotulo: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  containerPrioridades: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
