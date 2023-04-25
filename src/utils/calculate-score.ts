export const variations = [
  {
    title: "Capacidade funcional",
    answers: [3],
    inferior_limit: 10,
    variation: 20,
  },
  {
    title: "Limitação por aspectos físicos",
    answers: [4],
    inferior_limit: 4,
    variation: 4,
  },
  {
    title: "Dor",
    answers: [7, 8],
    inferior_limit: 2,
    variation: 10,
  },
  {
    title: "Estado geral de saúde",
    answers: [1, 11],
    inferior_limit: 5,
    variation: 20,
  },
  {
    title: "Vitalidade",
    answers: [9],
    items: [0, 4, 6, 8],
    inferior_limit: 4,
    variation: 20,
  },
  {
    title: "Aspectos sociais",
    answers: [6, 10],
    inferior_limit: 2,
    variation: 8,
  },
  {
    title: "Limitação por aspectos emocionais",
    answers: [5],
    inferior_limit: 3,
    variation: 3,
  },
  {
    title: "Saúde mental",
    answers: [9],
    items: [1, 2, 3, 5, 7],
    inferior_limit: 5,
    variation: 25,
  },
];

export const calculateVariation = (
  score: number,
  inferior_limit: number,
  variation: number
) => {
  return ((score - inferior_limit) * 100) / variation;
};
