import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';

const CreateAccountScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View styles={styles.container}>
            <Text h3>Create Account</Text>
            <TextInput 
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TextInput
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false} 
            />
            <Button title="Create Account"/>
            <TouchableOpacity>
                <Text>Already have an account? Log in instead.</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default CreateAccountScreen;