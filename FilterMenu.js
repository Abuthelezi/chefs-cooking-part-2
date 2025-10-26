import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

export default function FilterMenu({ route }) {
  const { menu } = route.params;
  const [query, setQuery] = useState('');

  const filtered = menu.filter(item =>
    item.course.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filter by Course</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter course name..."
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={filtered}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 5 },
  card: { marginBottom: 15, padding: 10, backgroundColor: '#e0e0e0', borderRadius: 5 },
  name: { fontSize: 18, fontWeight: 'bold' },
});

