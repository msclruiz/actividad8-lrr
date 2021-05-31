import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Reportes from "../screens/Reportes/Reportes";
import ReportesAgregar from "../screens/Reportes/ReportesAgregar";
import ReportesBorrar from "../screens/Reportes/ReportesBorrar";
import ReportesDetalle from "../screens/Reportes/ReportesDetalle";
import ReportesEditar from "../screens/Reportes/ReportesEditar";


const Stack = createStackNavigator();

export default function ReporteStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="reportes"
                component={Reportes}
                options={{title: "SOLICITUD DE REPORTE"}}
            />
             <Stack.Screen
                name="reportes-agregar"
                component={ReportesAgregar}
                options={{title: "AGREGAR REPORTE"}}
            />
              <Stack.Screen
                name="reportes-borrar"
                component={ReportesBorrar}
                options={{title: "BORRAR REPORTE"}}
            />
              <Stack.Screen
                name="reportes-editar"
                component={ReportesEditar}
                options={{title: "EDITAR REPORTE"}}
            />
              <Stack.Screen
                name="reportes-detalle"
                component={ReportesDetalle}
                options={{title: "DETALLE DE REPORTE"}}
            />
        </Stack.Navigator>
    );
}
