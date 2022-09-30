import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Input, Text, Button } from '@rneui/base';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/authContext';
import { useFonts } from 'expo-font';

const backgroundImage = { uri: 'https://images.unsplash.com/photo-1543837173-6c26bc89937b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'}

const WelcomeScreen = ({ navigation }) => {
    const [loaded] = useFonts({
        BlackJack: require('../../assets/fonts/BlackJack.ttf'),
    });
    
    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={backgroundImage}
                style={styles.background}
            >
                <Text style={styles.titleText}>Foliage</Text>
                <Text style={styles.subtitleText}>Discover the beauty of all seasons with us</Text>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Login')}
                    style={styles.loginButton}
                >
                    <Text style={styles.loginText}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('CreateAccount')}
                    style={styles.createAccountButton}
                >
                    <Text style={styles.createAccountText}>Create Account</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 76,
        fontFamily: 'BlackJack',
        color: 'white',
        textAlign: 'center',
        marginBottom: -10

    },
    subtitleText: {
        fontSize: 16,
        color: 'white',
        marginBottom: 24


    },
    loginButton: {
        width: '80%',
        height: 40,
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10

    },
    createAccountButton: {
        width: '80%',
        height: 40,
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: '35%'
    },
    loginText: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white'
    },
    createAccountText: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white'

    }

})


export default WelcomeScreen;