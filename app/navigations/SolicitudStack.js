import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Solicitudes from "../screens/Solicitudes/Solicitudes";

/*
import Viajes from "../screens/Viajes/Viajes";
import Destinos from "../screens/Viajes/Destinos";
import Eventos from "../screens/Viajes/Eventos";
*/

import Sellin from "../screens/Solicitudes/Sellin";
import Sellout from "../screens/Solicitudes/Sellout";

const Stack = createStackNavigator();

export default function SolicitudStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="solicitud"
                component={Solicitudes}
                options={{title: "SOLICITUD DE PROVISIONES"}}
            />
            <Stack.Screen 
                name="sellin"
                component={Sellin}
                options={{title: "APOYOS POR SELL IN"}}
            />
            <Stack.Screen 
                name="sellout"
                component={Sellout}
                options={{title: "APOYOS POR SELL OUT"}}
            />            
        </Stack.Navigator>
    );
}
