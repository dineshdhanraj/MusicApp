import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  MainContent: {
    flex: 1
  },
  custom: {
    marginLeft: 160,
    backgroundColor: "red",
    marginTop: 10,
    borderWidth: 3,
    width: 100
  },
  MarginTop: {
    marginTop: 30,
    marginBottom:15
  },
  Button: {
    fontSize: 22,
    color: "black",
    alignSelf: "center"
  },
  Texter: {
    paddingLeft: 20,
    marginLeft: 90,
    width: 230,
    fontSize: 20,
    borderWidth: 2,
    height: 50
  },
  Tracker:{fontSize:20,marginLeft:20,color:'black'},
  ListItemView:{marginTop:20,borderWidth:2,marginLeft:10,marginRight:10},
  MainContentView:{marginTop:20,marginLeft:10,marginRight:10},
  NotAvailable: {
    marginLeft: 75,
    marginTop: 20,
    fontSize: 30,
    alignItems:'center'
  },
  container: {
    flex: 1
  },
  touchstyle: {
    marginLeft: 160,
    backgroundColor: "red",
    marginTop: 10,
    borderWidth: 3,
    width: 100
  },

  Heading: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
    marginLeft: 10
  },
  seperator: {
    flexDirection: "row",
    marginTop: 20
  },
  textstyle: {
    flex: 2,
    fontWeight: "bold",
    borderRadius: 15,
    borderWidth: 2,
    width: "50%",
    fontSize: 18,
    paddingLeft: 20,
    justifyContent: "center",
    color: "black",
    marginRight: 50,
    backgroundColor: "lightblue"
  },
  Default:{marginLeft:48,color:'black',fontSize:22,marginTop:40},
Error:{color:'red',fontSize:20,marginRight:50},
  image: {
    marginTop: 30,
    marginLeft: 140,
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom:30,
    width: 100,
    height: 100,
    backgroundColor: "blue"
  }
});
export default styles;
