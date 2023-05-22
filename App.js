import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import Formulario from './src/components/formulario.js';
import Paciente from './src/components/paciente.js';

const App = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);

  const handleEliminar = (id) => {
    const nuevosPacientes = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(nuevosPacientes);
  };

  const handleEditar = (id, nuevoPaciente) => {
    const nuevosPacientes = pacientes.map((paciente) => {
      if (paciente.id === id) {
        return { ...paciente, ...nuevoPaciente };
      }
      return paciente;
    });
    setPacientes(nuevosPacientes);
  };

  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>Administración de citas {''}</Text>
      <Text style={styles.subtitulo}>Veterinaria</Text>


      <Pressable style={styles.btnNuevaCita} onPress={() => setModalVisible(true)}>
        <Text style={styles.btnTextNuevaCita}>Nueva cita {''}</Text>
      </Pressable>

      <Text> </Text>
      <Text style={styles.subtitulo}>Listado de citas</Text>
      <Text> </Text>

      {pacientes.length === 0 ?
        <Text style={styles.subtitulo}>No hay pacientes</Text> :
        <FlatList
          data={pacientes}
          renderItem={({ item }) => {
            return (
              <Paciente
                item={item} 
                handleEliminar={handleEliminar}
                handleEditar={handleEditar}
                />
            )
          }}
          keyExtractor={(item) => item.id}
        />
      }

      <Formulario modalVisible={modalVisible} setPacientes={setPacientes} pacientes={pacientes} setModalVisible={setModalVisible}></Formulario>
    </SafeAreaView>

  );
}
const color = '#7FFFD4'
const colorTexto = '#FFFFFF'
const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#333333',
    flex: 1,
    color:colorTexto,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    color:colorTexto,
    fontFamily: 'Roboto',
  },
  subtitulo: {
    fontSize: 20,
    color: color,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  btnNuevaCita: {
    backgroundColor: color,
    color:colorTexto,
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextNuevaCita: {
    color:colorTexto,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    //textTrasnform: 'uppercase'
  },
});

export default App;
