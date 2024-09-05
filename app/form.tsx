import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const MyForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '',password:'' });

  const handleInputChange = (name:any, value:any) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email) {
      Alert.alert('Validation failed', 'Please fill in all fields');
    } else {
      console.log('Form submitted', formData);
      Alert.alert('Success', 'Form submitted successfully');
      setFormData({name:'',email:'',password:''})
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formData.name}
        onChangeText={(value) => handleInputChange('name', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleInputChange('email', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formData.password}
        onChangeText={(value) => handleInputChange('password', value)}
        secureTextEntry={true}
      />
      <Button title="Submit"
       onPress={handleSubmit} 
       />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});

export default MyForm;
