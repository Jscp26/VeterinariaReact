import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import DetallePaciente from './DetallePaciente';

const Paciente = ({ item, handleEliminar, handleEditar }) => {
  const { paciente, propietario, email, telefono, sintomas } = item;
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const [mostrarEdicion, setMostrarEdicion] = useState(false);

  const toggleMostrarDetalle = () => {
    setMostrarDetalle(!mostrarDetalle);
  };
  
  const eliminarPaciente = () => {
    handleEliminar(item.id);
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.labelValue}>{paciente}</Text>
        <Text>{'      '}</Text>
        <Text style={styles.label}>Propietario:</Text>
        <Text style={styles.labelValue}>{propietario}</Text>
      </View>

      <View style={styles.labelContainer}>

      
        <Pressable style={styles.btnEliminar} onPress={eliminarPaciente}>
          <Text style={styles.txtBotones} >Eliminar {''}</Text>
        </Pressable>

        {mostrarDetalle ? (
          <DetallePaciente
            paciente={paciente}
            propietario={propietario}
            email={email}
            telefono={telefono}
            sintomas={sintomas}
            toggleMostrarDetalle = {toggleMostrarDetalle}
            handleEditar={(nuevoPaciente) =>
              handleEditar(item.id, nuevoPaciente)
            }
          />
          
        ) : (
          <Pressable style={styles.btnModificar} onPress={toggleMostrarDetalle}>
            <Text style={styles.txtBotones}>Modificar {''}</Text>
          </Pressable>
          )}
      </View>
    </View>
  );
};
  
const color = '#007BFF'
const colorTexto = '#333333'
const styles = StyleSheet.create({

    modalContainer: {
      textAlign:'center',
      justifyContent: 'center',
      backgroundColor: '#F5F5F5'
    },
    labelContainer: {
      flexDirection: 'row',
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      textAlign: 'left',
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 5,
      color: colorTexto,
    },
    labelValue: {
      textAlign: 'left',
      fontSize: 16,
      color: colorTexto,
    },

    btnEliminar:{
      backgroundColor: '#8B0000',
      textAlign:'center',
      justifyContent: 'center',
      width: 120,
      height: 28,
      color: colorTexto,
      borderRadius: 10,
    },

    btnModificar: {
      textAlign:'center',
      justifyContent: 'center',
      backgroundColor: '#2ECC40',
      width: 120,
      height: 28,
      color: '#FFFFFF',
      borderRadius: 10
    },
    txtBotones: {
      color:'#FFFFFF',
      textAlign:'center',
      fontFamily: 'Roboto',
    }
    
});
export default Paciente;