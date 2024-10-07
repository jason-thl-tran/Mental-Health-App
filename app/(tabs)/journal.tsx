import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Journal() {
  const [userInput, setUserInput] = useState(''); 
  const [messages, setMessages] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [inputHeight, setInputHeight] = useState(40); 
  const [mode, setMode] = useState('ai'); 

  const handleSend = async () => {
    if (userInput.trim() === '') return; 

    if (mode === 'free') {
      setMessages((prevMessages) => [...prevMessages, { type: 'user', text: userInput }]);
      setUserInput(''); 
      return;
    }

    setMessages((prevMessages) => [...prevMessages, { type: 'user', text: userInput }]);
    setLoading(true); 
    try {
      const response = await fetch('http://localhost:3000/journal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }), 
      });

      const data = await response.json();

      setMessages((prevMessages) => [...prevMessages, { type: 'ai', text: data.response }]);
      setUserInput(''); 
    }  finally {
      setLoading(false); 
    }
  };

  const handleModeSwitch = (newMode) => {
    setMode(newMode); 
    setMessages([]); 
    setUserInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mental Health Journal</Text>

      {}
      <View style={styles.modeContainer}>
        <TouchableOpacity
          style={[styles.modeButton, mode === 'free' ? styles.activeMode : null]}
          onPress={() => handleModeSwitch('free')}
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

      {}
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageBox,
              message.type === 'user' ? styles.userMessage : styles.aiMessage,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>

      {}
      {mode === 'free' && (
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.freeInput, { height: 800 }]} 
            placeholder="Write your thoughts..."
            multiline={true}
            value={userInput}
            onChangeText={(text) => setUserInput(text)}
          />
          <TouchableOpacity style={[styles.button,{ marginTop:400 }]} onPress={handleSend}>
            <Text style={[styles.buttonText]}>Write</Text>
          </TouchableOpacity>
        </View>
      )}

      {}
      {mode === 'ai' && (
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { height: Math.max(40, inputHeight) }]}
            placeholder="How are you feeling today?"
            multiline={true}
            value={userInput}
            onChangeText={(text) => setUserInput(text)}
            onContentSizeChange={(event) => setInputHeight(event.nativeEvent.contentSize.height)}
          />
          <TouchableOpacity style={styles.button} onPress={handleSend}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      )}

      {loading && <Text style={styles.loading}>Communicating with my mental assistant...</Text>}
    </View>
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
  },
  aiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f0f0',
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
  freeInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    backgroundColor: '#fff',
    marginRight: 10,
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
