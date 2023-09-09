'use client'

import * as Ably from 'ably'
import { AblyProvider } from 'ably/react'

import QuestionsComponent from "../components/QuestionComponent";
import ResultsComponent from "../components/ResultsComponent";

const VotingComponent = () => {

    const question = getQuestion();
    const client = new Ably.Realtime.Promise({ authUrl: '/api/createTokenRequest' });

    return (
        <AblyProvider client={ client }>
            <QuestionsComponent question={question} />
            <ResultsComponent question={question} />
        </AblyProvider>
    )
}

export default VotingComponent;


function getQuestion() {    
    return {
      text: "Which biscuit is best?",
      options: [
          { key: "A", text: "Jammy Dodger", votes: 0, src: "images/jamiedodger.jpg" },
          { key: "B", text: "Oreo", votes: 0, src: "images/oreo.jpg" },
          { key: "C", text: "Bourbon", votes: 0, src: "images/bourbon.jpg" },
          { key: "D", text: "Custard cream", votes: 0, src: "images/custardcream.jpg" }
      ]
    };
  }