import { useState, useContext } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, View, TextInput, SafeAreaView } from 'react-native';
import { Input, Text, Button } from '@rneui/base';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/authContext';

const backgroundImage = { uri: 'https://images.unsplash.com/photo-1543837173-6c26bc89937b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'}

const LoginScreen = ({ navigation }) => {
    const { state, logIn } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView styles={styles.container}>
            {/* <ImageBackground
                source={backgroundImage}
                style={styles.background}
            > */}
            <View style={styles.headingBox}>
                <Text style={styles.loginText}>Log In</Text>
            </View>
            <View style={styles.formBox}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput style={styles.input}
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Text style={styles.inputLabel}>Password</Text>
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

            {/* </ImageBackground> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    headingBox: {
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 20
    },
    background: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
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
    formBox: {
        width: '100%'
        
        
    },
    input: {
        marginHorizontal: 20,
        backgroundColor: '#F7F7F7',
        fontSize: 16,
        padding: 10,
        borderRadius: 6,
        borderColor: '#BBBBBB',
        borderWidth: 1,

    },
    inputLabel: {
        fontSize: 14,
        marginLeft: 20,
        marginBottom: 8,
        marginTop: 10
    },
})

export default LoginScreen;