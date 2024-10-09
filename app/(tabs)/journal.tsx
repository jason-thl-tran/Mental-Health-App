import React, { useState } from 'react';
import {
  View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView,KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard} from 'react-native';

export default function Journal() {
  const [userInput, Input_is] = useState('');
  const [messages, messa_is] = useState([]);
  const [loading, loadcoming] = useState(false);
  const [inputHeight, setInputHeight] = useState(40);
  const [mode, setMode] = useState('ai');

  const handleSend = async () => {
    if (userInput.trim() === '') return;

    if (mode === 'aaaa') {
      
      messa_is((avantmess) => [...avantmess, { type: 'user', text: userInput }]);
      Input_is('');
      return;
    }

    messa_is((avantmess) => [...avantmess, { type: 'user', text: userInput }]);
    loadcoming(true);
    try {
      const response = await fetch('http://localhost:3000/journal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await response.json();

      messa_is((avantmess) => [...avantmess, { type: 'ai', text: data.response }]);
      Input_is('');
    } finally {
      loadcoming(false);
    }
  };

  const handleModeSwitch = (newMode) => {
    setMode(newMode);
    messa_is([]);
    Input_is('');
  };

  
const renderFreeJournalingInput = () => (
  <ScrollView contentContainerStyle={styles.inputContainer}>
    <TextInput
      style={[styles.input, { height: 500 }]} 
      placeholder="Write your thoughts..."
      multiline={true}
      value={userInput}
      onChangeText={(text) => Input_is(text)}
      scrollEnabled={true} 
    />
  </ScrollView>
);


  
  const renderAssistantinput = () => (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, { height: Math.max(40, inputHeight) }]} 
        placeholder="How are you feeling today?"
        multiline={true}
        value={userInput}
        onChangeText={(text) => Input_is(text)}
        onContentSizeChange={(event) => setInputHeight(event.nativeEvent.contentSize.height)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      {Platform.OS === 'web' ? (
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Text style={styles.title}>Mental Health Journal</Text>

              <View style={styles.modeContainer}>
                <TouchableOpacity
                  style={[styles.modeButton, mode === 'aaaa' ? styles.activeMode : null]}
                  onPress={() => handleModeSwitch('aaaa')}
                >
                  <Text style={styles.modeButtonText}>Free Journaling</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modeButton, mode === 'ai' ? styles.activeMode : null]}
                  onPress={() => handleModeSwitch('ai')}
                >
                  <Text style={styles.modeButtonText}>Personal Assistant Prompt</Text>
                </TouchableOpacity>
              </View>

              <ScrollView contentContainerStyle={styles.chatContainer}>
                {messages.map((message, index) => (
                  <View
                    key={index}
                    style={[
                      styles.messageBox,
                      message.type === 'user' ? styles.userMessage : styles.assistantMessage,
                    ]}
                  >
                    <Text style={styles.messageText}>{message.text}</Text>
                  </View>
                ))}
              </ScrollView>

              {}
              {mode === 'aaaa' ? renderFreeJournalingInput() : renderAssistantinput()}

              {loading && <Text style={styles.loading}>Communicating with my mental assistant...</Text>}
            </View>
          </TouchableWithoutFeedback>
        </View>
      ) : (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Text style={styles.title}>Mental Health Journal</Text>

              <View style={styles.modeContainer}>
                <TouchableOpacity
                  style={[styles.modeButton, mode === 'aaaa' ? styles.activeMode : null]}
                  onPress={() => handleModeSwitch('aaaa')}
                >
                  <Text style={styles.modeButtonText}>Free Journaling</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modeButton, mode === 'ai' ? styles.activeMode : null]}
                  onPress={() => handleModeSwitch('ai')}
                >
                  <Text style={styles.modeButtonText}>AI Prompt</Text>
                </TouchableOpacity>
              </View>

              <ScrollView contentContainerStyle={styles.chatContainer}>
                {messages.map((message, index) => (
                  <View
                    key={index}
                    style={[
                      styles.messageBox,
                      message.type === 'user' ? styles.userMessage : styles.assistantMessage,
                    ]}
                  >
                    <Text style={styles.messageText}>{message.text}</Text>
                  </View>
                ))}
              </ScrollView>

              {}
              {mode === 'aaaa' ? renderaaaaJournalingInput() : renderAssistantinput()}

              {loading && <Text style={styles.loading}>Communicating with my mental assistant...</Text>}
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  modeButton: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#ddd',
    borderRadius: 20,
  },
  activeMode: {
    backgroundColor: '#8a2be2',
  },
  modeButtonText: {
    color: '#fff',
  },
  chatContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  messageBox: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#d1e7dd',
    borderWidth: 1,
    borderColor: '#8a2be2',
    padding: 10,
    borderRadius: 10,
  },
  assistantMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f0f0',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    backgroundColor: '#fff',
    marginRight: 10,
    textAlignVertical: 'top', 
  },
  button: {
    backgroundColor: '#8a2be2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loading: {
    fontSize: 16,
    color: '#999',
    marginTop: 10,
  },
});
