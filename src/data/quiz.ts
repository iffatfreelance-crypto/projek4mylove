export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  successFeedback: string;
  failureFeedback: string;
}

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "Di mana tempat jadian kita?",
    options: ["Es krim tumpuk", "Tomoro", "Telkom", "Semua benar"],
    correctAnswer: 1,
    successFeedback: "Ih masih inget diaa.",
    failureFeedback: "Mosoo sii?",
  },
  {
    id: 2,
    question: "Saat momen apa pertama kali kita ketemu?",
    options: ["Absen paskib", "Event TC", "Adhikari", "Semua salah"],
    correctAnswer: 0,
    successFeedback: "Pinter banget!",
    failureFeedback: "Masa lupa sih?",
  },
  {
    id: 3,
    question: "Siapa yang paling sering ngambek dan badmood?",
    options: ["Aku", "Kamu", "Dua-duanya", "Enggak ada"],
    correctAnswer: 0,
    successFeedback: "Ngaku juga akhirnya!",
    failureFeedback: "Hmm... coba diingat lagiii.",
  },
];

export const quizFeedback = {
  highScore: "Ih keren bangett cantiknya akuuu, ternyata kamu masih inget semuanya.",
  mediumScore: "Lumayan lah ya, tapi nanti kita bikin memori baru lagi biar ingat terus.",
  lowScore: "Kayaknya kita butuh jalan-jalan lagi biar memorinya makin kuat nih.",
};
