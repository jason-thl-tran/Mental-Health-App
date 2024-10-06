import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function IPhone16Plus14() {
    return (
        <View style={styles.iPhone16Plus14Container}>
            <Text style={styles.about}>
                {`About`}
            </Text>
            <Text style={styles.moodFlowisawellnessappdesignedtoenhanceyouremotionalwellbeingthroughinteractiveexperiencesOurgoalistoempoweryoutounderstandandimproveyouremotionalstatesfosteringmindfulnessandpositivityineverydaylife}>
                {`Mood Flow is a wellness app designed to enhance your emotional well-being through interactive experiences. \n\nOur goal is to empower you to understand and improve your emotional states, fostering mindfulness and positivity in everyday life.`}
            </Text>
            <Text style={styles.developersZoieBonnetteJasonTran}>
                {`Developers: Zoie Bonnette, Jason Tran `}<Text style={{"textAlign":"left","color":"rgba(0, 0, 0, 1)","fontFamily":"Nunito Sans","fontSize":32,"fontWeight":400}}>{` `}</Text>
            </Text>
            {/* Visualwind:: can be replaced with <Arrow_back  /> */}
            <View style={styles.arrow_back}>
                <Svg style={styles.icon} width="16" height="16" viewBox="0 0 16 16" fill="none" >
<Path d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z" fill="#1D1B20"/>
</Svg>

            </View>
        </View>  )
}

const styles = StyleSheet.create({
    iPhone16Plus14Container: {
        position: "relative",
        flexShrink: 0,
        height: 932,
        width: 430,
        backgroundColor: "rgba(255, 255, 255, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 0
    },
    about: {
        position: "absolute",
        flexShrink: 0,
        top: 44,
        left: 148,
        width: 134,
        height: 65,
        textAlign: "center",
        color: "rgba(0, 0, 0, 1)",
        fontSize: 48,
        fontWeight: 400
    },
    moodFlowisawellnessappdesignedtoenhanceyouremotionalwellbeingthroughinteractiveexperiencesOurgoalistoempoweryoutounderstandandimproveyouremotionalstatesfosteringmindfulnessandpositivityineverydaylife: {
        position: "absolute",
        flexShrink: 0,
        top: 147,
        left: 22,
        width: 393,
        height: 528,
        textAlign: "left",
        color: "rgba(0, 0, 0, 1)",
        fontSize: 32,
        fontWeight: 400
    },
    developersZoieBonnetteJasonTran: {
        position: "absolute",
        flexShrink: 0,
        top: 745,
        left: 22,
        width: 341,
        height: 44,
        textAlign: "left",
        color: "rgba(0, 0, 0, 1)",
        fontSize: 20,
        fontWeight: 400
    },
    arrow_back: {
        position: "absolute",
        flexShrink: 0,
        top: 18,
        height: 24,
        left: 21,
        width: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0
    },
    icon: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        right: 4,
        bottom: 4,
        left: 4,
        overflow: "visible"
    }
});