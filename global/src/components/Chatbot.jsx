import { useState } from "react";

export default function InterviewChatbot() {
  const questions = [
    "1. Fale sobre você.",
    "2. Qual sua maior força?",
    "3. Qual sua maior fraqueza?",
    "4. Por que quer trabalhar aqui?",
    "5. Onde se vê em 5 anos?",
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [messages, setMessages] = useState([
    { sender: "bot", text: questions[0] },
  ]);
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState([]);
  const [feedbackGiven, setFeedbackGiven] = useState(false);

  function generateFeedback(answersArray) {
    const feedback = [];
    answersArray.forEach((ans, idx) => {
      if (!ans || ans.length < 5) {
        feedback.push(
          `Pergunta ${
            idx + 1
          }: Sua resposta foi muito curta, tente elaborar mais.`
        );
      } else if (ans.length > 100) {
        feedback.push(
          `Pergunta ${idx + 1}: Ótima resposta, detalhada e completa.`
        );
      } else {
        feedback.push(
          `Pergunta ${
            idx + 1
          }: Boa resposta, mas poderia acrescentar mais exemplos.`
        );
      }
    });
    return feedback;
  }

  function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setAnswers((prev) => [...prev, input]);

    const nextQuestionIdx = currentQuestion + 1;

    if (nextQuestionIdx < questions.length) {
      const nextQuestion = questions[nextQuestionIdx];
      setMessages((prev) => [...prev, { sender: "bot", text: nextQuestion }]);
      setCurrentQuestion(nextQuestionIdx);
    } else {
      const feedback = generateFeedback([...answers, input]);
      feedback.forEach((f) => {
        setMessages((prev) => [...prev, { sender: "bot", text: f }]);
      });
      setFeedbackGiven(true);
    }

    setInput("");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f0f2f5] dark:bg-[#0d0d0d] font-sans px-4">
      <div className="w-[550px] bg-white dark:bg-[#1A1A1A] shadow-xl rounded-xl p-6 flex flex-col">
        <h2 className="text-center mb-4 text-black dark:text-white text-2xl">
          Simulação de Entrevista
        </h2>

        <div className="h-[400px] border border-gray-300 dark:border-gray-700 rounded-lg p-3 overflow-y-auto mb-4 bg-[#f9f9f9] dark:bg-[#2A2A2A]">
          {messages.map((msg, i) => (
            <p
              key={i}
              className={`px-3 py-2 rounded-lg max-w-[80%] my-2 text-sm ${
                msg.sender === "user"
                  ? "ml-auto bg-blue-200 dark:bg-blue-900 text-black dark:text-white text-right"
                  : "mr-auto bg-gray-200 dark:bg-gray-700 text-black dark:text-white text-left"
              }`}
            >
              <b>{msg.sender}:</b> {msg.text}
            </p>
          ))}
        </div>

        {!feedbackGiven && (
          <div className="flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua resposta..."
              className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2A2A2A] text-black dark:text-white outline-none"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={sendMessage}
              className="ml-3 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold"
            >
              Enviar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
