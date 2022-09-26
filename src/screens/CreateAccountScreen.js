import { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Text, Button } from '@rneui/base';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/authContext';

const CreateAccountScreen = ({ navigation }) => {
    const { state, createAccount } = useContext(AuthContext); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(state);

    return (
        <View styles={styles.container}>
            <Spacer>
                <Text h3>Create Account</Text>
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
                <Button title="Create Account" onPress={() => createAccount({ email, password })}/>
            </Spacer>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>Already have an account? Log in instead.</Text>
            </TouchableOpacity>
        </View>
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

export default CreateAccountScreen;