import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function ChefsMenu({ navigation, menu, setMenu }) {
  const handleDelete = (index) => {
    const updatedMenu = [...menu];
    updatedMenu.splice(index, 1);
    setMenu(updatedMenu);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chef's Menu</Text>
      <Text style={styles.subheader}>Total Dishes: {menu.length}</Text>

      <FlatList
        data={menu}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>Course: {item.course}</Text>
            <Text>Price: R{item.price}</Text>
            <TouchableOpacity onPress={() => handleDelete(index)}>
              <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Button title="Add New Dish" onPress={() => navigation.navigate('AddDish')} />
      <Button title="Filter by Course" onPress={() => navigation.navigate('FilterMenu', { menu })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subheader: { fontSize: 18, marginBottom: 10 },
  card: { marginBottom: 15, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 },
  name: { fontSize: 18, fontWeight: 'bold' },
  delete: { color: 'red', marginTop: 10 }
});

