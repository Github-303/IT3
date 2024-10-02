import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 5,
  },
  line: {
    marginLeft: -30,
    marginRight: -30,
    borderBottomWidth: 2,
    borderBottomColor: '#dddddd',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    color: '#333333',
    fontSize: 16,
    paddingBottom: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#f2f2f2',
  },
  buttonEnabled: {
    backgroundColor: '#007bff',
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default styles;
