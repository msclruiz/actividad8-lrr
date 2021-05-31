import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import Autorizaciones from "../screens/Autorizaciones/Autorizaciones";



const Stack = createStackNavigator();

export default function AutoStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="autorizaciones"
                component={Autorizaciones}
                options={{title: "SOLICITUD DE AUTORIZACION"}}
            />
             
        </Stack.Navigator>
    );
}
