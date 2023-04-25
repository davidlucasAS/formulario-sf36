export const questions = [
  {
    id: "1",
    question: "Em geral você diria que sua saúde é",
    type: "simple",
    answers: [
      {
        title: "Excelente",
        points: 1,
      },
      {
        title: "Muito Boa",
        points: 2,
      },
      {
        title: "Boa",
        points: 3,
      },
      {
        title: "Ruim",
        points: 4,
      },
      {
        title: "Muito Ruim",
        points: 5,
      },
    ],
    validation: (data: { title: string; points: number }) => {
      const pointsScore: Record<number, number> = {
        1: 5,
        2: 4.4,
        3: 3.4,
        4: 2,
        5: 1,
      };

      const result = pointsScore[data.points];

      return result;
    },
  },
  {
    id: "2",
    question:
      "Comparada há um ano atrás, como você se classificaria sua idade em geral, agora?",
    type: "simple",
    answers: [
      {
        title: "Muito Melhor",
        points: 1,
      },
      {
        title: "Um Pouco Melhor",
        points: 2,
      },
      {
        title: "Quase a Mesma",
        points: 3,
      },
      {
        title: "Um Pouco Pior",
        points: 4,
      },
      {
        title: "Muito Pior",
        points: 5,
      },
    ],
  },
  {
    id: "3",
    question:
      "Os seguintes itens são sobre atividades que você poderia fazer atualmente durante um dia comum. Devido à sua saúde, você teria dificuldade para fazer estas atividades? Neste caso, quando?",
    type: "multiple",
    answersType: "single",
    questions: [
      "Atividades Rigorosas, que exigem muito esforço, tais como correr, levantar objetos pesados, participar em esportes árduos.",
      "Atividades moderadas, tais como mover uma mesa, passar aspirador de pó, jogar bola, varrer a casa.",
      "Levantar ou carregar mantimentos",
      "Subir vários lances de escada",
      "Subir um lance de escada",
      "Curvar-se, ajoelhar-se ou dobrarse",
      "Andar mais de 1 quilômetro",
      "Andar vários quarteirões",
      "Andar um quarteirão",
      "Tomar banho ou vestir-se",
    ],
    answers: [
      {
        title: "Sim, dificulta muito",
        points: 1,
      },
      {
        title: "Sim, dificulta um pouco",
        points: 2,
      },
      {
        title: "Não, não dificulta de modo algum",
        points: 3,
      },
    ],
    validation: (
      _: { title: string; points: number },
      responses?: Array<any>
    ) => {
      const fullScore = responses?.reduce<number>((previous, current) => {
        return (previous += current.answer.points);
      }, 0);

      return fullScore;
    },
  },
  {
    id: "4",
    question:
      "Durante as últimas 4 semanas, você teve algum dos seguintes problemas com seu trabalho ou com alguma atividade regular, como conseqüência de sua saúde física?",
    type: "multiple",
    questions: [
      "Você diminui a quantidade de tempo que se dedicava ao seu trabalho ou a outras atividades?",
      "Realizou menos tarefas do que você gostaria?",
      "Esteve limitado no seu tipo de trabalho ou a outras atividades",
      "Teve dificuldade de fazer seu trabalho ou outras atividades (p.ex. necessitou de um esforço extra). ",
    ],
    answers: [
      {
        title: "Sim",
        points: 1,
      },
      {
        title: "Não",
        points: 2,
      },
    ],
    validation: (
      _: { title: string; points: number },
      responses?: Array<any>
    ) => {
      const fullScore = responses?.reduce<number>((previous, current) => {
        return (previous += current.answer.points);
      }, 0);

      return fullScore;
    },
  },
  {
    id: "5",
    question:
      "Durante as últimas 4 semanas, você teve algum dos seguintes problemas com seu trabalho ou outra atividade regular diária, como conseqüência de algum problema emocional (como se sentir deprimido ou ansioso)? ",
    type: "multiple",
    questions: [
      "Você diminui a quantidade de tempo que se dedicava ao seu trabalho ou a outras atividades?",
      "Realizou menos tarefas do que você gostaria? ",
      "Não realizou ou fez qualquer das atividades com tanto cuidado como geralmente faz.",
    ],
    answers: [
      {
        title: "Sim",
        points: 1,
      },
      {
        title: "Não",
        points: 2,
      },
    ],
    validation: (
      _: { title: string; points: number },
      responses?: Array<any>
    ) => {
      const fullScore = responses?.reduce<number>((previous, current) => {
        return (previous += current.answer.points);
      }, 0);

      return fullScore;
    },
  },
  {
    id: "6",
    question:
      "Durante as últimas 4 semanas, de que maneira sua saúde física ou problemas emocionais interferiram nas suas atividades sociais normais, em relação à família, amigos ou em grupo?",
    type: "simple",
    answers: [
      {
        title: "De forma nenhuma",
        points: 1,
      },
      {
        title: "Ligeiramente",
        points: 2,
      },
      {
        title: "Moderadamente",
        points: 3,
      },
      {
        title: "Bastante",
        points: 4,
      },
      {
        title: "Extremamente",
        points: 5,
      },
    ],
  },
  {
    id: "7",
    question: "Quanta dor no corpo você teve durante as últimas 4 semanas?",
    type: "simple",
    answers: [
      {
        title: "Nenhuma",
        points: 1,
      },
      {
        title: "Muito leve",
        points: 2,
      },
      {
        title: "Leve",
        points: 3,
      },
      {
        title: "Moderada",
        points: 4,
      },
      {
        title: "Grave",
        points: 5,
      },
      {
        title: "Muito grave",
        points: 6,
      },
    ],
  },
  {
    id: "8",
    question:
      "Durante as últimas 4 semanas, quanto a dor interferiu com seu trabalho normal (incluindo o trabalho dentro de casa)?",
    type: "simple",
    answers: [
      {
        title: "De maneira alguma",
        points: 1,
      },
      {
        title: "Um pouco",
        points: 2,
      },
      {
        title: "Moderadamente",
        points: 3,
      },
      {
        title: "Bastante",
        points: 4,
      },
      {
        title: "Extremamente",
        points: 5,
      },
    ],
  },
  {
    id: "9",
    question:
      "Os seguintes itens são sobre atividades que você poderia fazer atualmente durante um dia comum. Devido à sua saúde, você teria dificuldade para fazer estas atividades? Neste caso, quando?",
    type: "multiple",
    questions: [
      "Quanto tempo você tem se sentindo cheio de vigor, de vontade, de força? ",
      "Quanto tempo você tem se sentido uma pessoa muito nervosa?",
      "Quanto tempo você tem se sentido tão deprimido que nada pode anima-lo?",
      "Quanto tempo você tem se sentido calmo ou tranqüilo?",
      "Quanto tempo você tem se sentido com muita energia?",
      "Quanto tempo você tem se sentido desanimado ou abatido?",
      "Quanto tempo você tem se sentido esgotado?",
      "Quanto tempo você tem se sentido uma pessoa feliz?",
      "Quanto tempo você tem se sentido cansado?",
    ],
    answers: [
      {
        title: "Todo tempo",
        points: 1,
      },
      {
        title: "A maior parte do tempo",
        points: 2,
      },
      {
        title: "Uma boa parte do tempo",
        points: 3,
      },
      {
        title: "Alguma parte do tempo",
        points: 4,
      },
      {
        title: "Uma pequena parte do tempo",
        points: 5,
      },
      {
        title: "Nunca",
        points: 6,
      },
    ],
  },
  {
    id: "10",
    question:
      "Durante as últimas 4 semanas, quanto de seu tempo a sua saúde física ou problemas emocionais interferiram com as suas atividades sociais (como visitar amigos, parentes, etc)?",
    type: "simple",
    answers: [
      {
        title: "Todo Tempo",
        points: 1,
      },
      {
        title: "A maior parte do tempo",
        points: 2,
      },
      {
        title: "Alguma parte do tempo",
        points: 3,
      },
      {
        title: "Uma pequena parte do tempo",
        points: 4,
      },
      {
        title: "Nenhuma parte do tempo",
        points: 5,
      },
    ],
  },
  {
    id: "11",
    question:
      "Os seguintes itens são sobre atividades que você poderia fazer atualmente durante um dia comum. Devido à sua saúde, você teria dificuldade para fazer estas atividades? Neste caso, quando?",
    type: "multiple",
    questions: [
      "Eu costumo obedecer um pouco mais facilmente que as outras pessoas",
      "Eu sou tão saudável quanto qualquer pessoa que eu conheço",
      "Eu acho que a minha saúde vai piorar",
      "Minha saúde é excelente",
    ],
    answers: [
      {
        title: "Definitivamente verdadeiro",
        points: 1,
      },
      {
        title: "A maioria das vezes verdadeiro",
        points: 2,
      },
      {
        title: "Não sei",
        points: 3,
      },
      {
        title: "A maioria das vezes falso",
        points: 4,
      },
      {
        title: "Definitivamente falso",
        points: 5,
      },
    ],
  },
];
