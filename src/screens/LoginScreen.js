import { useState, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Text, Button } from '@rneui/base';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/authContext';

const LoginScreen = ({ navigation }) => {
    const { state, logIn } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView styles={styles.container}>
            <Spacer>
                <Text h3>Log In</Text>
            </Spacer>
            <Input 
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer/>
            <Input
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
    errorMessage: {
        fontSize: 14,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
})

export default LoginScreen;