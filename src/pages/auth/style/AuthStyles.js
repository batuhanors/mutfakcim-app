import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const loginStyles = StyleSheet.create({
  container: {
    backgroundColor: "#FCFFE7",
    alignItems: "center",
    paddingTop: 40,
    height: windowHeight,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  alignCenter: {
    alignItems: "center",
  },
  loginHeader: {
    marginTop: 2,
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  registerHeader: {
    marginTop: 8,
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  loginTxt: {
    textAlign: "center",
    marginTop: 54,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 32,
    fontFamily: "Roboto"
  },
  registerTxt: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 32,
  },
  loginForm: {
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#76B852",
  },
  inputLabel: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  inputText: {
    height: 40,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    color: "#000",
    marginBottom: 16,
  },
  inputField: {
    width: "80%",
    margin: 24,
  },
  checkbox: {
    backgroundColor: "#fff",
    margin: 2,
  },
  checkboxLabel: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
  loginBtn: {
    marginTop: 16,
    backgroundColor: "#FCFFE7",
    padding: 10,
    borderRadius: 6,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    marginLeft: "10%",
  },
  registerBtn: {
    marginTop: 16,
    backgroundColor: "#FCFFE7",
    padding: 10,
    borderRadius: 6,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    marginLeft: "20%",
  },
  BtnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "600",
    letterSpacing: 0.25,
  },

  txt: {
    color: "#fff",
    fontSize: 16,
  },
  underline: {
    textDecorationLine: "underline",
  },
});
