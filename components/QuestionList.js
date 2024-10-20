import { useState } from 'react';

export default function QuestionList({ questions, onReplyAdded }) {
  const [replyName, setReplyName] = useState('');
  const [replyEmail, setReplyEmail] = useState('');
  const [replyText, setReplyText] = useState('');
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleReplySubmit = async (questionId) => {
    const res = await fetch('/api/replies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        questionId,
        name: replyName,
        email: replyEmail,
        reply: replyText,
      }),
    });
    if (res.ok) {
      setReplyName('');
      setReplyEmail('');
      setReplyText('');
      setActiveQuestion(null);
      onReplyAdded();
    }
  };

  return (
    <div className="space-y-8">
      {questions.map((question) => (
        <div key={question._id} className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{question.question}</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Asked by: {question.name}</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <button
              onClick={() => setActiveQuestion(question._id)}
              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reply
            </button>
            {activeQuestion === question._id && (
              <form onSubmit={(e) => { e.preventDefault(); handleReplySubmit(question._id); }} className="mt-4 space-y-4">
                <input
                  type="text"
                  value={replyName}
                  onChange={(e) => setReplyName(e.target.value)}
                  placeholder="Name"
                  required
                  className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  value={replyEmail}
                  onChange={(e) => setReplyEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                />
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Reply"
                  required
                  rows="3"
                  className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                />
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit Reply
                </button>
              </form>
            )}
            {question.replies && question.replies.map((reply, index) => (
              <div key={index} className="mt-4 bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-gray-800">{reply.reply}</p>
                <p className="text-xs text-gray-500 mt-1">Replied by: {reply.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}