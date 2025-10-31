import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import {useCounterStore} from '../store/counter';

const HomeScreen = () => {
  const {count, increment, decrement, reset} = useCounterStore();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <View style={styles.counterRow}>
        <Button title="-" onPress={decrement} />
        <Text style={styles.count}>{count}</Text>
        <Button title="+" onPress={increment} />
      </View>
      <View style={styles.resetRow}>
        <Button title="Reset" onPress={reset} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  count: {
    fontSize: 28,
    fontWeight: '800',
    minWidth: 60,
    textAlign: 'center',
  },
  resetRow: {
    marginTop: 16,
  },
});


