import {Buyscreen, HomeScreen} from '../screens/index';
import { Text, TouchableOpacity, View } from 'react-native';

import {colors} from './../constants/theme/colors'
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {

    return(
        <Stack.Navigator initialrouteName="HomeScreen" 
        screenOptions={{
            headerTintColor:colors.primary,
            navigationBarColor:colors.secondary,
            headerTitleStyle:{
                fontFamily:'Raleway-Light',
                fontSize:18,
            },
        
        }}>
            <Stack.Screen 
            name='HomeScreen' 
            component={HomeScreen} 
            options={{
                headerShown:true,
                title:"Home Screen",
                headerRight:()=>{
                    return(
                        <TouchableOpacity>
                            <Text>Click Here!</Text>
                        </TouchableOpacity>
                    )
                }
            }}/>
            <Stack.Screen name='Buyscreen'
             component={Buyscreen}  
             options={{
                headerShown:true,
                title:"Buy Screen",
            }}/>

        </Stack.Navigator>
    )
}

export default ShopNavigator;