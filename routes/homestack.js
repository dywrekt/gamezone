import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    Homepage: {
        screen: Home,
        navigationOptions: {
            title: 'HorrorZone',
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
        }
    } 
}

const HomeStack = createStackNavigator (screens, {
    defaultNavigationOptions: {
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'red' }
    }
});

export default HomeStack;