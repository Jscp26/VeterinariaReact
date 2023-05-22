import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const DetallePaciente = ({ paciente, propietario,email,telefono,sintomas, handleEditar, toggleMostrarDetalle }) => {
  const [nuevoPaciente, setNuevoPaciente] = useState(paciente);
  const [nuevoPropietario, setNuevoPropietario] = useState(propietario);
  const [nuevoEmail, setNuevoEmail] = useState(email);
  const [nuevoTelefono, setNuevoTelefono] = useState(telefono);
  const [nuevoSintomas, setNuevoSintomas] = useState(sintomas);
  const [mostrarEdicion,setMostrarEdicion]= useState(true)
  const [mostrarDetalle,setMostrarDetalle] = useState(true)

  const guardarCambios = () => {
    const pacienteActualizado = {
      paciente: nuevoPaciente,
      propietario: nuevoPropietario,
      email: nuevoEmail,
      telefono: nuevoTelefono,
      sintomas: nuevoSintomas,
    };
    handleEditar(pacienteActualizado);
    toggleMostrarDetalle()
  };

  return (
    <View style={styles.container}>
      {mostrarEdicion && (
        <>
          <Text style={styles.label}>Paciente:</Text>
          <TextInput
            style={styles.input}
            value={nuevoPaciente}
            onChangeText={setNuevoPaciente}
          />
          <Text style={styles.label}>Propietario:</Text>
          <TextInput
            style={styles.input}
            value={nuevoPropietario}
            onChangeText={setNuevoPropietario}
          />
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={nuevoEmail}
            onChangeText={setNuevoEmail}
          />
          <Text style={styles.label}>Telefono:</Text>
          <TextInput
            style={styles.input}
            value={nuevoTelefono}
            onChangeText={setNuevoTelefono}
          />
          <Text style={styles.label}>Sintomas:</Text>
          <TextInput
            style={styles.input}
            value={nuevoSintomas}
            onChangeText={setNuevoSintomas}
          />
          <Pressable style={styles.btnGuardar} onPress={guardarCambios}>
            <Text style={styles.txtBotones}>Guardar Cambios {''}</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  btnGuardar: {
    color:'#008000',
    backgroundColor: '#008000',
    textAlign:'center',
    justifyContent: 'center',
    height: 28,
    borderRadius: 10,
  },
  txtBotones: {
    color:'#FFFFFF',
    textAlign:'center',
    fontFamily: 'Roboto',
  }
});

export default DetallePaciente;
