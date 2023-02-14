import { StyleSheet } from "react-native"

export const shopStyles = StyleSheet.create({
    centeredDiv: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#27272790"
    },
    modal: {
        marginTop: 100,
        backgroundColor: "#F0EEED",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        width: "80%",
        height: "30%"
    },
    modalInput: {
        alignItems: "center",
        height: 40,
        marginHorizontal: 18,
        borderRadius: 2,
        backgroundColor: "#ffffff",
    },
    flexInput: {
        alignItems: "center",
        height: 40,
        backgroundColor: "#ffffff",
        width: "26%",
        marginTop: 16
    },
    modalBtn: {
        backgroundColor: "#76B852",
        marginHorizontal: 48,
        height: 32,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        marginTop: 24
    },
    shopContainer: {
        backgroundColor: "#C9F4AA",
    },
    addShopContainer: {
        marginVertical: 18,
        marginHorizontal: 18,
        paddingBottom: 10,
        borderRadius: 3,
        backgroundColor: "#fff"
    },
    flexRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        paddingHorizontal: 8,
        width: "100%",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "stretch"
    },
    btnText: {
        color: "#fff",
        textAlign: "center"
    },
    addShopBtn: {
        backgroundColor: "#76B852",
        paddingHorizontal: 4,
        paddingVertical: 16,
        fontSize: 15,
    },
    addShopText: {
        fontSize: 17,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "#F0EEED"
    },
    tableContainer: {
        backgroundColor: "#fff",
        marginHorizontal: 18,
        borderRadius: 6
        
      },
      tableHeader: {
        backgroundColor: '#F0EEED',
      },
      saveShopBtn: {
        alignItems: "center",
        backgroundColor: "#76B852",
        marginHorizontal: 18,
        paddingVertical: 8,
        marginVertical: 12,
        borderRadius: 4,
      },
      shopHeader: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 18,
        letterSpacing: 0.5,
        backgroundColor: "#"
      },
      shopCardContainer: {
        marginHorizontal: 18,
        marginVertical: 12,
        backgroundColor: "#fff",
        borderRadius: 8
      },
      shopItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 16,
        borderBottomColor: '#000000',
        
        marginHorizontal: 12
      },
      shopItemHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#F0EEED",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
      },
      itemPrice: {
        marginVertical: 12,
        marginLeft: 10,
        fontSize: 20
      },
      itemTime: {
        marginTop: 12,
        marginRight: 32
      }

})