import { StyleSheet, Text, View, Image, ScrollView, StatusBar, SafeAreaView, Platform, Modal} from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

export default function Mais() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>q bosta </Text>







      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
  },
});