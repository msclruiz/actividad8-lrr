import React from 'react';
import { Image, StyleSheet, View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, ListItem, Icon } from "react-native-elements";


export default function Solicitudes() {
    const navigation = useNavigation();
    return (

        <ScrollView centerContent={true} styles={styles.viewBody}>
            <Text style={styles.textTitle}>SOLICITUD DE PROVISIONES</Text>

            <View style={styles.viewBtn}>            
            <Image
                style={styles.photo}
                style={{ width: 500, height: 300}}
                source={require('./../../../assets/image 2.png')}
                
            />

            {list.map((item, i) => (
                <ListItem key={i} bottomDivider>
                    <Icon name={item.icon} type="material-community" />
                    <ListItem.Content>
                      <ListItem.Title>{item.title}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem>
                ))}

                <Button 
                    title="APOYOS POR SELL IN"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("sellin")}
                />
                <Button 
                    title="APOYOS POR SELL OUT"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("sellout")}
                />
                
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewBody: {
      marginLeft: 30,
      marginRight: 30
    },
    textTitle: {
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    },
    btnStyle: {
      backgroundColor: "#465766"
    },
    btnContainer: {
      width: "50%",
      marginBottom: 5,
      marginTop: 5
    },
    viewBtn: {
      flex: 6,
      alignItems: "center",
    },
    photo: {
        height: 180,
        width: 180,
        marginBottom: 20,
        marginTop: 20
      }
  });

  const list = [
    
    
  ];
