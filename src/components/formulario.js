import React, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Button,
  Alert
} from 'react-native';

const Formulario =({modalVisible,setModalVisible,setPacientes,pacientes})=>{
  const [paciente, setPaciente] = useState('')
  const [propietario,setPropietario ] = useState('')
  const [email,setEmail ] = useState('')
  const [telefono,setTelefono ] = useState('')
  const [sintomas,setSintomas ] = useState('')

const handleCita = () =>{
  if ([paciente,propietario,email,telefono,sintomas].includes('')){
    Alert.alert("Error","Todos los campos son obligatorios")
    return
  }
  const nuevoPaciente = {
    id: Date.now(),
    paciente,
    propietario,
    email,
    telefono,
    sintomas
  }

  setPacientes([...pacientes,nuevoPaciente])
  setModalVisible(false)

  setPaciente('')
  setPropietario('')
  setEmail('')
  setTelefono('')
  setSintomas('')
}

    return(
        <Modal animationType='slide' visible={modalVisible} style={styles.modalContainer}>
        <SafeAreaView style={styles.modalContent}>
          <ScrollView>
            <View><Text style={styles.label}>Nombre paciente</Text></View>
            <TextInput style={styles.input}
            value = {paciente}
            onChangeText={setPaciente}
            ></TextInput>

            <View><Text style={styles.label}>Nombre propietario</Text></View>
            <TextInput style={styles.input}
            value = {propietario}
            onChangeText={setPropietario}
            ></TextInput>

            <View><Text style={styles.label}>Email</Text></View>
            <TextInput style={styles.input}
            value = {email}
            onChangeText={setEmail}
            keyboardType='email-address'
            ></TextInput>

            <View><Text style={styles.label}>Telefono</Text></View>
            <TextInput style={styles.input}
            value = {telefono}
            onChangeText={setTelefono}
            keyboardType='number-pad'
            ></TextInput>

            <View><Text style={styles.label}>Sintomas</Text></View>
            <TextInput style={styles.input}
            value = {sintomas}
            onChangeText={setSintomas}
            multiline={true}
            ></TextInput>

            <Button title='Enviar solicitud' onPress={handleCita} style={{marginBottom:100}}></Button>
            <Button title='Cerrar' onPress={()=>setModalVisible(false)}></Button>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    );
}

const color = '#007BFF'
const colorTexto = '#FFFFFF'
const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#666666',
    },
    modalContent: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      overflow: 'hidden',
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
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 30
    },
  });

export default Formulario;