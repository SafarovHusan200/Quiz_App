export const jsQuiz = {
  questions: [
    {
      id: 0,
      question: "IT - ",
      choices: [
        "Information Texnology",
        "Internet Texnology",
        "Information Table",
        "to'g'ri javob yo'q",
      ],
      type: "MCQs",
      correctAnswer: "Information Texnology",
    },
    {
      id: 1,
      question: "Algoritm deb nimaga aytiladi?",
      choices: [
        "ma'lum bir vazifalarni bajarishdagi tartibli qadamlar ketma-ketligi",
        "ma'lum bir vazifalarni bajarishdagi tartibsiz qadamlar ketma-ketligi",
        "ma'lum bir vazifalarni bajarishdagi qadamlar ketma-ketligi",
        "To'g'ri javob yo'q",
      ],
      type: "MCQs",
      correctAnswer:
        "ma'lum bir vazifalarni bajarishdagi tartibli qadamlar ketma-ketligi",
    },
    {
      id: 2,
      question: "Algoritm nechaga bo'linadi?",
      choices: ["2", "3", "4", "5"],
      type: "MCQs",
      correctAnswer: "3",
    },

    {
      id: 3,
      question: "Chiziqli algoritm deb nimaga aytiladi?",
      choices: [
        "Hech qanday shart bajarilmaydigan algoritmga chiziqli algoritm deyiladi",
        "Ma'lum bir shart asosida bajariladigan algoritmga tarmoqlanuvchi algoritm deyiladi",
        "Ma'lum bir shart asosida bir-necha marta bajariladigan algoritmga takrorlanuvchi algoritm deyiladi",
        "to'g'ri javob yo'q",
      ],
      type: "MCQs",
      correctAnswer:
        "Hech qanday shart bajarilmaydigan algoritmga chiziqli algoritm deyiladi",
    },
    {
      id: 4,
      question: "Tarmoqlanuvchi algoritm deb nimaga aytiladi?",
      choices: [
        "Hech qanday shart bajarilmaydigan algoritmga chiziqli algoritm deyiladi",
        "Ma'lum bir shart asosida bajariladigan algoritmga tarmoqlanuvchi algoritm deyiladi",
        "Ma'lum bir shart asosida bir-necha marta bajariladigan algoritmga takrorlanuvchi algoritm deyiladi",
        "to'g'ri javob yo'q",
      ],
      type: "MCQs",
      correctAnswer:
        "Ma'lum bir shart asosida bajariladigan algoritmga tarmoqlanuvchi algoritm deyiladi",
    },
    {
      id: 5,
      question: "Takrorlanuvchi algoritm deb nimaga aytiladi??",
      choices: [
        "Hech qanday shart bajarilmaydigan algoritmga chiziqli algoritm deyiladi",
        "Ma'lum bir shart asosida bajariladigan algoritmga tarmoqlanuvchi algoritm deyiladi",
        "Ma'lum bir shart asosida bir-necha marta bajariladigan algoritmga takrorlanuvchi algoritm deyiladi",
        "to'g'ri javob yo'q",
      ],
      type: "MCQs",
      correctAnswer:
        "Ma'lum bir shart asosida bir-necha marta bajariladigan algoritmga takrorlanuvchi algoritm deyiladi",
    },
  ],
};

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};
