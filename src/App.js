import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

const steps=[
  {
    id: '1',
    message: 'What is your name?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3'
  },
  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you!',
    end: true
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <center>
            <ChatBot
              recognitionEnable={true}
              speechSynthesis={{ enable: true, lang: 'en' }}
              steps={steps}
            />
        </center>
      </div>
    );
  }
}

export default App;