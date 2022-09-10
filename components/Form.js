import React, { useState } from "react";
import { Text, TouchableOpacity } from 'react-native';

const FormComponent = () => {

   const handlePress = async () => {

        const dummy_data = {
            username: 'jacob',
            password: 'toronto'
        }

        const response = await fetch('http://localhost:3001/api/location', {
            method: "POST",
            body: JSON.stringify(dummy_data),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const data = await response.json();
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <Text>Click me please</Text>
        </TouchableOpacity>
    );
};

export default FormComponent;