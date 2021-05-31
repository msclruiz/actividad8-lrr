import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Credito from "../screens/Creditos/Credito";
import CreditoAgregar from "../screens/Creditos/CreditoAgregar";
import CreditoBorrar from "../screens/Creditos/CreditoBorrar";
import CreditoDetalle from "../screens/Creditos/CreditoDetalle";
import CreditoEditar from "../screens/Creditos/CreditoEditar";


const Stack = createStackNavigator();

export default function CreditoStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="credito"
                component={Credito}
                options={{title: "SOLICITUD DE PROVISION"}}
            />
             <Stack.Screen
                name="credito-agregar"
                component={CreditoAgregar}
                options={{title: "AGREGAR SOLICITUD"}}
            />
              <Stack.Screen
                name="credito-borrar"
                component={CreditoBorrar}
                options={{title: "BORRAR SOLICITUD"}}
            />
              <Stack.Screen
                name="credito-editar"
                component={CreditoDetalle}
                options={{title: "EDITAR SOLICITUD"}}
            />
              <Stack.Screen
                name="credito-detalle"
                component={CreditoEditar}
                options={{title: "DETALLE DE SOLICITUD"}}
            />
        </Stack.Navigator>
    );
}
