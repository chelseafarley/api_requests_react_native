import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function App() {
  let [employeeId, setEmployeeId] = useState("");
  let [employeeName, setEmployeeName] = useState("");

  let getEmployees = () => {
    fetch("http://127.0.0.1:5000/employees")
    .then(res => {
      console.log(res.status);
      console.log(res.headers);
      return res.json();
    })
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    )
  };

  let getEmployee = (id) => {
    fetch(`http://127.0.0.1:5000/employees/${id}`)
    .then(res => {
      console.log(res.status);
      console.log(res.headers);
      return res.json();
    })
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    )
  };

  let deleteEmployee = (id) => {
    fetch(`http://127.0.0.1:5000/employees/${id}`, {
      method: "DELETE"
    })
    .then(res => {
      console.log(res.status);
      console.log(res.headers);
      return res.json();
    })
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    )
  };

  let updateEmployee = (id, name) => {
    fetch(`http://127.0.0.1:5000/employees/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: name})
    })
    .then(res => {
      console.log(res.status);
      console.log(res.headers);
      return res.json();
    })
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    )
  };

  let createEmployee = (name) => {
    fetch(`http://127.0.0.1:5000/employees`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: name})
    })
    .then(res => {
      console.log(res.status);
      console.log(res.headers);
      return res.json();
    })
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    )
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder='Employee Id' style={styles.input} value={employeeId} onChangeText={(value) => setEmployeeId(value)} /> 
      <TextInput placeholder='Employee Name' style={styles.input} value={employeeName} onChangeText={(value) => setEmployeeName(value)} /> 
      <Button title="Get" onPress={getEmployees} />
      <Button title="Get By Id" onPress={() => getEmployee(employeeId)} />
      <Button title="Delete By Id" onPress={() => deleteEmployee(employeeId)} />
      <Button title="Update By Id" onPress={() => updateEmployee(employeeId, employeeName)} />
      <Button title="Create" onPress={() => createEmployee(employeeName)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    alignSelf: "stretch",
    margin: 8,
    padding: 4
  }
});
