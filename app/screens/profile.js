import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 

const Profile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSave = () => {
        console.log('Profile Saved:', { name, email });
    };

    return (
        <LinearGradient
        colors={['rgba(16, 193, 241, 0.4)', 'rgba(16, 241, 77, 0.4)']}
        start={{ x: 0, y: 0 }}  
        end={{ x: 1, y: 1 }}  
        style={styles.container}
        >
            <View style={styles.innerContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={name}
                    onChangeText={setName}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="phone-number"
                />
                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        borderRadius: 16,
        margin: 20,
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#10C1F1',
        padding: 15,
        borderRadius: 10, // Rounded corners
        height: 40, // Fixed height for the button
        justifyContent: 'center', // Vertically center content
        alignItems: 'center', // Horizontally center content
        borderColor: '#fff', // Border color
        borderWidth: 0.5,
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // Shadow for Android
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center', // Ensures text alignment
    },
    
});

export default Profile;
