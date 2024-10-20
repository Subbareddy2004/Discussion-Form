import { useState, useEffect } from 'react';
import QuestionForm from '../components/QuestionForm';
import QuestionList from '../components/QuestionList';

export default function Home() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const res = await fetch('/api/questions');
    const data = await res.json();
    setQuestions(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-8">Discussion Forum</h1>
        <QuestionForm onQuestionAdded={fetchQuestions} />
        <QuestionList questions={questions} onReplyAdded={fetchQuestions} />
      </div>
    </div>
  );
}