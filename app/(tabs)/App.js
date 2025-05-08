import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

export default class ProfileCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    {/* Profile Image */}
                    <View style={styles.cardImageContainer}>
                        <Image 
                            style={styles.cardImage}
                            source={require('../../assets/images/user.png')}
                        />
                    </View>
                    
                    {/* User Details */}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.nameText}>John Doe</Text>
                        <Text style={styles.occupationText}>React Native Developer</Text>
                        <Text style={styles.descriptionText}>
                            Passionate mobile developer with 5+ years of experience 
                            building cross-platform applications. Specializing in 
                            React Native and UI/UX design.
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const profileCardColor = '#4285F4'; // Updated blue color
const textColor = '#333';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    cardContainer: {
        backgroundColor: profileCardColor,
        width: '90%',
        maxWidth: 350,
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5
    },
    cardImageContainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 3,
        borderColor: 'white'
    },
    cardImage: {
        width: 140,
        height: 140,
        borderRadius: 70
    },
    detailsContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center'
    },
    nameText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: textColor,
        marginBottom: 5
    },
    occupationText: {
        fontSize: 16,
        color: profileCardColor,
        marginBottom: 15,
        fontWeight: '500'
    },
    descriptionText: {
        fontSize: 14,
        color: textColor,
        lineHeight: 20,
        textAlign: 'center'
    }
});