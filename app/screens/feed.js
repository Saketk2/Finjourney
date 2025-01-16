import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 

const Feed = () => {
    const handleFriends = () => {
        console.log('You clicked the Friends button');
    };

    return (
        <View style = {styles.container}>
            <View style={styles.innerContainer}>
                <TouchableOpacity style={styles.button} onPress={handleFriends}>
                    <Text style={styles.buttonText}>Friends</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(245, 40, 145, 0.4)',
    },
    innerContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        borderRadius: 16,
        margin: 20,
    },
    button: {
        position: 'absolute', // Allows manual positioning
        top: 10, // Distance from the top
        left: 10, // Distance from the left
        backgroundColor: 'rgba(16, 193, 241, 0.8)', // Button background
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        borderColor: '#fff', // Border color
        borderWidth: 0.5,
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // Shadow for Android
        elevation: 5,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center', // Ensures text alignment
    },
    
});

export default Feed;