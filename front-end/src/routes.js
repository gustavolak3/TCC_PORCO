import React from "react";
 
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
 
import Login from "./screens/login"
import CriarConta from "./screens/cadastro/cadastro";
import Home from "./screens/home/home";
import Sobre from "./screens/sobre/sobre";
import styles from "./screens/termos/termos"
import Termos from "./screens/termos/termos";
import Criadores from "./screens/criadores/criadores";
import Suporte from "./screens/suporte/suporte";
import Transacoes from "./screens/adicionar";
import Receita from "./screens/receita";
import Despesa from "./screens/despesas";

const Stack = createStackNavigator();
 
export default function Routes()
{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShow: false}} name="Login" component={Login}/>
                <Stack.Screen options={{headerShow: false}} name="CriarConta" component={CriarConta}/>
                <Stack.Screen options={{headerShow: false}} name="Home" component={Home}/>
                <Stack.Screen options={{headerShow: false}} name="Sobre" component={Sobre}/>
                <Stack.Screen options={{headerShow: false}} name="Termos" component={Termos}/>
                <Stack.Screen options={{headerShow: false}} name="Criadores" component={Criadores}/>
                <Stack.Screen options={{headerShow: false}} name="Suporte" component={Suporte}/>
                <Stack.Screen options={{headerShow: false}} name="Transacoes" component={Transacoes}/>
                <Stack.Screen options={{headerShow: false}} name="Receita" component={Receita}/>
                <Stack.Screen options={{headerShow: false}} name="Despesa" component={Despesa}/>
                
            </Stack.Navigator>
            </NavigationContainer>
    )
};
