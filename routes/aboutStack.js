
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About HorrorZone',
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'red' }
    }
});

export default AboutStack;