import{StyleSheet} from
'react-native'
const mascara = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  sz: {
    fontSize:24,
    textAlign: 'right',
    color: '#00FF00',
    fontWeight: 'bold',
    fontStyle:'italic'

  },
  box: {
    width: 200,
    height: 200,
    marginLeft:50,
    backgroundColor: '#ADD8E6',
    borderRadius:15,
    borderWidth:2,
    alingSelf:15,
    paddingLeft:20,
    alignItems: 'center',

  },
  box2: {
    width:280,
    height:200,
    marginLeft:20,
    borderWidth:2,
    bordereRadius:15,
    alingSelf:15,
    alignItems:'left',
    paddingLeft:20,
    paddingTop:50,
    borderRadius: 50,
    borderColor:'#000',
    backgroundColor:'#FFFF00',
  }
});

export default mascara;