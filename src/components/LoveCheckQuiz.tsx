"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface LoveCheckQuizProps {
  onComplete: () => void;
}

const QUIZ_CONFIG = {
  questions: [
    {
      question: "What's my favorite color?",
      placeholder: "Enter your answer...",
      answer: "blue",
      type: "text" as const,
    },
    {
      question: "What's our anniversary date? (DD/MM)",
      placeholder: "DD/MM",
      answer: "14/02",
      type: "text" as const,
    },
  ],
  wrongAnswerMessage: "Hmm... that doesn't seem right. Try again! 💕",
};

const LoveCheckQuiz = ({ onComplete }: LoveCheckQuizProps) => {
  const [mounted, setMounted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const question = QUIZ_CONFIG.questions[currentQuestion];
  const totalQuestions = QUIZ_CONFIG.questions.length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (answer.trim().toLowerCase() === question.answer.toLowerCase()) {
      setError("");
      setAnswer("");

      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        onComplete();
      }
    } else {
      setError(QUIZ_CONFIG.wrongAnswerMessage);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="love-theme min-h-screen flex items-center justify-center p-4 bg-background">
      <motion.div
        key="quiz-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={shake ? "animate-shake" : ""}
      >
        <Card className="w-full max-w-md bg-card border-border shadow-2xl">
          <CardHeader className="text-center space-y-4 pb-2">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex justify-center"
            >
              <Heart className="w-12 h-12 text-primary fill-primary" />
            </motion.div>

            <div className="space-y-2">
              <p className="text-primary/80 text-sm font-medium tracking-widest uppercase">
                A Little Love Check
              </p>
              <h1 className="text-2xl font-bold text-foreground/90">
                Answer to unlock our story 💕
              </h1>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`question-${currentQuestion}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-lg font-medium text-foreground/90 block text-center">
                      {question.question}
                    </label>
                    <Input
                      type={question.type}
                      value={answer}
                      onChange={(e) => {
                        setAnswer(e.target.value);
                        setError("");
                      }}
                      placeholder={question.placeholder}
                      className="bg-secondary border-border text-foreground placeholder:text-muted-foreground text-center text-lg h-12"
                      autoFocus
                    />
                  </div>

                  <AnimatePresence>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-destructive text-center text-sm"
                      >
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <Button
                    type="submit"
                    className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity animate-pulse-glow"
                  >
                    {currentQuestion < totalQuestions - 1 ? "Next" : "Finish"} 💖
                  </Button>
                </form>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 pt-2">
              {Array.from({ length: totalQuestions }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentQuestion
                      ? "bg-primary"
                      : i < currentQuestion
                      ? "bg-primary/50"
                      : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <p className="text-center text-muted-foreground text-sm">
              Question {currentQuestion + 1} of {totalQuestions}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default LoveCheckQuiz;
