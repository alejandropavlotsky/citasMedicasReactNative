import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableHighlight} from 'react-native';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';

const App = () => {

  const [mostrarForm, guardarMostrarForm] = useState(false)

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

  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarForm)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas</Text>

      <View>
          <TouchableHighlight
              onPress={() => mostrarFormulario()}
              style={styles.btnMostrarForm}>
          <Text style={styles.textMostrarForm}>Crear Nueva Cita</Text>
          </TouchableHighlight>
      </View>

      <View style={styles.contenido}>

        {mostrarForm ? (
          <>
            <Text style={styles.titulo}>Crear Nueva Cita</Text>
            <Formulario />
          </>
        ) : (
          <>
            <Text style={styles.titulo}>{citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'}</Text>
            <FlatList
              style={styles.listado}
              data={citas}
              keyExtractor={(cita) => cita.id}
              renderItem={({item}) => <Cita cita={item} eliminarPaciente={eliminarPaciente}/>}
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado:{
    flex: 1,
  },
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
  btnMostrarForm: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10,
  },
  textMostrarForm: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default App;
