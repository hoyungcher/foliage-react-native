import { useState, useContext } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import { Input, Text, Button } from '@rneui/base';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/authContext';

const backgroundImage = { uri: 'https://images.unsplash.com/photo-1543837173-6c26bc89937b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'}

const LoginScreen = ({ navigation }) => {
    const { state, logIn } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View styles={styles.container}>
            <ImageBackground
                source={backgroundImage}
                style={styles.background}
            >
                <View style={styles.loginBackground}>
                    <Spacer>
                        <Text style={styles.loginText}>Log In</Text>
                    </Spacer>
                    <TextInput style={styles.input}
                        label="Email"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <Spacer/>
                    <TextInput style={styles.input}
                        secureTextEntry
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize="none"
                        autoCorrect={false} 
                    />
                    {state.errorMessage ? <Text styles={styles.errorMessage}>{state.errorMessage}</Text> : null}
                    <Spacer>
                        <Button title="Log In" onPress={() => logIn({ email, password })}/>
                    </Spacer>
                    <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                        <Text>Don't have an account? Create an account instead.</Text>
                    </TouchableOpacity>

                </View>

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
    errorMessage: {
        fontSize: 14,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
    loginText: {
        fontSize: 40
    },
    loginBackground: {
        opacity: 0.7,
        backgroundColor: 'white',
        marginBottom: '40%',
        maxWidth: '90%',
        borderRadius: 10
        
        
        
    },
    input: {
        maxWidth: '80%',
        borderColor: 'black',
        borderWidth: 1,
        marginLeft: 15,
        fontSize: 24

    }
})

export default LoginScreen;