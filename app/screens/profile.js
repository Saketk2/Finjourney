import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 

const Profile = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleEdit = () => {
        navigation.navigate('EditProfile'); 
    };

    return (
        <View style = {styles.container}>
            <View style={styles.innerContainer}>
                <Text style = {styles.header}>My Profile</Text>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.label}>Phone Number</Text>
                <TouchableOpacity style={styles.button} onPress={handleEdit}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(32, 205, 59, 0.4)',
    },
    innerContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        borderRadius: 16,
        margin: 20,
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 40,
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 30,
        textAlign: 'center',

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
        width: 150,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center', // Ensures text alignment
    },
    
});

export default Profile;
