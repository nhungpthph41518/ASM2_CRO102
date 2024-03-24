import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'

const Contact = () => {
    return (
        <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>

            <View style={styles.container}>
                <Text style={styles.textFeedBack}>Feedback</Text>
                <Text style={styles.textPls}>Please tell what do you think, any kinds of feedback is hightly appreciated. And, don't forget to check out Usernoise Pro.</Text>

                <View style={styles.item}>

                    <Text style={styles.itemSmall}>Idea</Text>
                    <Text style={styles.itemSmall}>Problem</Text>
                    <Text style={styles.itemSmall}>Question</Text>

                </View>


                <View>
                    <TextInput placeholder='Your feedback' style={styles.input} />
                    <TextInput placeholder='Short summary' style={styles.inputSmall} />
                    <TextInput placeholder='Your email' style={styles.inputSmall} />
                </View>


                <TouchableOpacity style={styles.buttonAction}>
                    <Text style={styles.buttonActionText}> Submit feedback</Text>
                </TouchableOpacity>


            </View>
        </TouchableWithoutFeedback>
        
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink'
    },

    textFeedBack: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue',
        marginHorizontal: 40,
        marginTop: 70,
        marginBottom: 20,

    },

    textPls: {
        marginHorizontal: 20,
    },

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,

    },

    itemSmall: {
        fontWeight: 'bold',
        marginTop: 20,

    },

    input: {
        height: 150,
        width: 360,
        backgroundColor: 'white',
        marginTop: 40,
        marginLeft: 25,
        borderRadius: 10,
        paddingLeft: 10

    },

    inputSmall: {
        height: 50,
        width: 360,
        backgroundColor: 'white',
        marginTop: 40,
        marginLeft: 25,
        borderRadius: 10,
        paddingLeft: 10
    },

    buttonActionText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'

    },

    buttonAction: {
        backgroundColor: 'blue',
        marginHorizontal: 60,
        height: 50,
        marginTop: 20,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',

    }




})