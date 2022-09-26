import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Text, Button } from '@rneui/base';
import Spacer from '../components/Spacer';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View styles={styles.container}>
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
            <Spacer>
                <Button title="Log In" onPress={() => navigation.navigate('ExploreNavigator')}/>
            </Spacer>
            <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                <Text>Don't have an account? Create an account instead.</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default LoginScreen;