import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';

const App = () => {
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Hook', propietario: 'Alejandro', sintomas: 'no come'},
    {id: '2', paciente: 'Redux', propietario: 'Pedro', sintomas: 'no duerme'},
    {id: '3', paciente: 'Native', propietario: 'Juan', sintomas: 'no canta'},
  ]);

  const eliminarPaciente = id => {
    setCitas((citasActuales) => {
      return citasActuales.filter(cita => cita.id !== id)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <Formulario />

      <Text style={styles.titulo}>{citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'}</Text>
      <FlatList
        data={citas}
        keyExtractor={(cita) => cita.id}
        renderItem={({item}) => <Cita cita={item} eliminarPaciente={eliminarPaciente}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#aa076b',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 50,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
