import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import Markdown from 'react-native-markdown-display';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const resourcesContent = `
# Mental Health Resources

## On Campus Resources:

**Student Health Services**  
806.743.2848  
Student Wellness Center, 1003 Flint  

**Dean of Students**  
806.742.2984  
Student Union Building, Room 201AA  

**Risk Intervention & Safety Education (RISE)**  
806.742.2110  
Drane Hall, Room 247  

**Student Counseling Center**  
806.742.3674  
Student Wellness Center, Room 201  

**Psychology Clinic**  
806.742.3737  
Psychology Building, 1st Floor  

**Family Therapy Clinic**  
806.742.3074  
Human Sciences, Room 164  
$10 per session for TTU Students  

**QPR Training (Question. Persuade. Refer.)**  
806.742.2110 / 806.742.3674  
Suicide prevention training for faculty, staff, and students.  
Offered by RISE and the Student Counseling Center.  

**Raider Recharge**  
806.742.2110  
One-on-one wellness coaching for students who need a little help getting on and staying on the right track.  

**Texas Tech Crisis Helpline**  
806.742.5555  

## Off Campus Resources:

**National Suicide Prevention Lifeline**  
1.800.273.8255  

**National Suicide Prevention Lifeline and Chat**  
1.800.799.4889  

**The Trevor Project**  
1.866.488.7386  
Free Crisis helpline for LGBTQIA+ youth  

**Voice of Hope**  
806.763.3232  
[www.voiceofhopelubbock.org](http://www.voiceofhopelubbock.org)  
Free individual counseling and group therapy for victims of sexual assault  

**Emergency Medical Services, Fire, or Police**  
Dial: 911  
`;

const Resources = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={{ backgroundColor: 'white' }}>
                <ScrollView 
                    contentInsetAdjustmentBehavior='automatic'
                    style={{ height: '100%' }}
                >
                    <View style={{ padding: 16 }}>
                    <Markdown>{resourcesContent}</Markdown>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
};

export default Resources;
