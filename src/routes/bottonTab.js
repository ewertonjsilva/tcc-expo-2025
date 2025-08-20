import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

import Home from '../screens/Home'; 
import Produtos from '../screens/Produtos'; 
import Carrinho from '../screens/Carrinho'; 
import PerfilUsuario from '../screens/PerfilUsuario';

const Tab = createBottomTabNavigator(); 

export default function BottonTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Produtos" component={Produtos} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
      <Tab.Screen name="PerfilUsuario" component={PerfilUsuario} />
    </Tab.Navigator>
  );
}