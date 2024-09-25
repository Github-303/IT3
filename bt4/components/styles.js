import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  button: {
    width: 200,  
    paddingVertical: 15, 
    borderRadius: 30,  
    marginVertical: 10,  
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 3, 
  },
  buttonText: {
    color: 'white',
    fontSize: 18, 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  message: {
    marginTop: 30,
    fontSize: 20,
    color: '#fff',
  },
});

export default styles;
