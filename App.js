import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function HomeScreen() {
  // State variables to manage form inputs and the menu list


  const [menu, setMenu] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');
// Adds a new dish to the menu if all fields are filled

  const handleAddDish = () => {
    if (name && description && course && price) {
      const newDish = { name, description, course, price };
      setMenu([...menu, newDish]);
      setName('');
      setDescription('');
      setCourse('');
      setPrice('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chef's Menu</Text>
      <Text style={styles.subheader}>Total Dishes: {menu.length}</Text>

      <FlatList
        data={menu}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>Course: {item.course}</Text>
            <Text>Price: R{item.price}</Text>
          </View>
        )}
      />

      <Text style={styles.formHeader}>Add New Dish</Text>
      <TextInput
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        multiline
      />
      <Picker
        selectedValue={course}
        onValueChange={(itemValue) => setCourse(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Select Course" value="" />
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
        <Picker.Item label="Beverage" value="Beverage" />
      </Picker>
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Add Dish" onPress={handleAddDish} />
    </View>
  );
}
// Basic styling for layout and components


const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subheader: { fontSize: 18, marginBottom: 10 },
  formHeader: { fontSize: 20, marginTop: 20, marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  card: { marginBottom: 15, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 },
  name: { fontSize: 18, fontWeight: 'bold' },
});

