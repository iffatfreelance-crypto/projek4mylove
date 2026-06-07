import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Heart, X } from 'lucide-react';
import { quizData, quizFeedback } from '../data/quiz';
import { SectionTransition } from './SectionTransition';
import { FloralDivider, PeonyBloom, WhiteRose } from './FloralElements';

export const QuizSection = ({ onComplete }: { onComplete: () => void }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState<null | 'success' | 'failure'>(null);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (index: number) => {
    const activeQuestion = quizData[currentQuestion];
    const correct = index === activeQuestion.correctAnswer;
    const shouldRejectWrongAnswer = activeQuestion.id === 3;

    if (correct) {
      setScore(score + 1);
      setShowFeedback('success');
    } else {
      setShowFeedback('failure');
    }

    setTimeout(() => {
      setShowFeedback(null);
      if (!correct && shouldRejectWrongAnswer) {
        return;
      }

      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsFinished(true);
      }
    }, 1800);
  };

  const getFinalMessage = () => {
    const percentage = (score / quizData.length) * 100;
    if (percentage === 100) return quizFeedback.highScore;
    if (percentage >= 50) return quizFeedback.mediumScore;
    return quizFeedback.lowScore;
  };

  return (
    <SectionTransition className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden section-shell px-6 py-20">
      <PeonyBloom size={220} className="absolute -bottom-24 -left-16 opacity-25" />
      <WhiteRose size={150} className="absolute right-8 top-10 opacity-35" />

      {!isFinished ? (
        <div className="relative z-10 w-full max-w-xl">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 font-poppins text-xs font-bold uppercase tracking-[0.22em] text-floral-rose">
                Pertanyaan {currentQuestion + 1} dari {quizData.length}
              </p>
              <h2 className="font-playfair text-3xl text-warm-brown">Uji Ingatanmu</h2>
            </div>
            <div className="rounded-full border border-blush/45 bg-white/65 px-4 py-2 text-right shadow-sm">
              <span className="font-poppins text-xs font-bold uppercase tracking-[0.16em] text-warm-brown/65">
                Skor {score}
              </span>
            </div>
          </div>

          <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-white/65 shadow-inner">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
              className="h-full rounded-full bg-gradient-to-r from-sky via-blush to-butter"
            />
          </div>

          <div className="glass-card relative overflow-hidden rounded-lg p-6 shadow-xl md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-7"
              >
                <h3 className="min-h-20 font-poppins text-xl font-medium leading-relaxed text-warm-brown">
                  {quizData[currentQuestion].question}
                </h3>

                <div className="grid grid-cols-1 gap-3">
                  {quizData[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={option}
                      whileHover={{ scale: 1.015, backgroundColor: 'rgba(255, 255, 255, 0.82)' }}
                      whileTap={{ scale: 0.985 }}
                      disabled={showFeedback !== null}
                      onClick={() => handleAnswer(index)}
                      className="rounded-lg border border-blush/35 bg-white/52 p-4 text-left font-poppins text-sm font-medium text-warm-brown transition-all hover:border-floral-rose disabled:cursor-not-allowed disabled:opacity-55"
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  className={`absolute inset-0 z-20 flex flex-col items-center justify-center rounded-lg p-6 text-center backdrop-blur-md ${
                    showFeedback === 'success' ? 'bg-blush/30' : 'bg-white/70'
                  }`}
                >
                  <div
                    className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
                      showFeedback === 'success' ? 'bg-white text-floral-rose' : 'bg-butter/70 text-warm-brown'
                    }`}
                  >
                    {showFeedback === 'success' ? <Check size={32} /> : <X size={32} />}
                  </div>
                  <p className="font-playfair text-2xl font-bold text-warm-brown">
                    {showFeedback === 'success'
                      ? quizData[currentQuestion].successFeedback
                      : quizData[currentQuestion].failureFeedback}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-lg text-center"
        >
          <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-blush/45 text-floral-rose">
            <Heart size={38} fill="currentColor" />
          </div>
          <h2 className="mb-4 font-playfair text-4xl text-warm-brown">Quiz Selesai</h2>
          <p className="mb-5 font-poppins text-xl font-bold text-floral-rose">
            Total Skor: {score} / {quizData.length}
          </p>
          <p className="mb-8 font-poppins text-lg leading-relaxed text-warm-brown/78">
            {getFinalMessage()}
          </p>
          <FloralDivider className="mb-8" />

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onComplete}
            className="soft-button rounded-lg px-10 py-4 font-poppins text-sm font-bold uppercase tracking-[0.16em]"
          >
            Buka Kejutan
          </motion.button>
        </motion.div>
      )}
    </SectionTransition>
  );
};
