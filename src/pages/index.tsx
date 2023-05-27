import RadioButton from "@/components/radio-button";
import { calculateVariation, variations } from "@/utils/calculate-score";
import { Inter } from "next/font/google";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { questions } from "../../data/questions";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [page, setPage] = useState<number>(0);
  const [answers, setAnswers] = useState<Array<any>>([]);
  const [isFinish, setIsFinish] = useState<boolean>(false);

  const { register, handleSubmit } = useForm();

  const question = questions[page];

  const getQuestion = (page: number, data: Record<string, string>) => {
    const response = Object.entries(data)
      .filter((consumer) => {
        const [key] = consumer;

        const [_, questionPage] = key.split("-");

        if (+questionPage == page) {
          return consumer;
        }
      })
      .map((consumer) => JSON.parse(consumer[1]));

    return response;
  };

  const handleFinish = () => {
    setIsFinish(true);
  };

  const handleNextPage = (data: Record<string, any>) => {
    const last = questions.length - 1;
    const current = questions[page];

    let responses = getQuestion(page, data);

    let score = current.validation?.(responses[0].answer, responses);

    if (!score) {
      score = responses[0].answer.points;
    }

    setAnswers((old) => [...old, { responses, score }]);

    if (page == last) {
      handleFinish();
      return;
    }

    setPage((old) => (old += 1));
  };

  const handleGoBack = () => {
    if (page == 0) {
      console.log({ page, first: 0 });
      return;
    }

    setPage((old) => (old -= 1));
  };

  if (isFinish) {
    return (
      <ul>
        {variations.map((variation) => {
          if (answers.length == 0 || !isFinish) {
            return;
          }

          let calc = 0;

          if (variation?.items) {
            const current = variation.answers[0];

            const currentResponse = answers[current - 1];

            const score = variation.items.reduce((previous, next) => {
              return (previous +=
                currentResponse.responses[next]?.answer?.points);
            }, 0);

            calc = calculateVariation(
              score,
              variation.inferior_limit,
              variation.variation
            );
          } else {
            const score = variation.answers.reduce((previous, next) => {
              return (previous += answers[next - 1]?.score);
            }, 0);

            calc = calculateVariation(
              score,
              variation.inferior_limit,
              variation.variation
            );
          }

          return (
            <li key={variation.title}>{`${
              variation.title
            } Calculo: ${Math.round(calc)}`}</li>
          );
        })}
      </ul>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form
        onSubmit={handleSubmit(handleNextPage)}
        className="max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-between"
      >
        <h1 className="text-lg">{question.question}</h1>
        {question.type == "simple" && (
          <ul className="w-96 mt-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {question.answers.map((answer, index) => {
              return (
                <li
                  key={index}
                  className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
                >
                  <div className="flex items-center">
                    <RadioButton
                      title={answer.title}
                      value={JSON.stringify({ answer, page })}
                      {...register(`questionary-${page}`)}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        {question.type == "multiple" && (
          <div>
            <ul className="flex flex-col gap-8  mt-8 max-h-96 overflow-hidden overflow-y-auto">
              {question.questions?.map((consumer, index) => (
                <div key={index}>
                  <h1>{consumer}</h1>
                  <ul className="w-96 mt-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {question.answers.map((answer, idx) => (
                      <li
                        key={idx}
                        className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
                      >
                        <div className="flex items-center">
                          <RadioButton
                            title={answer.title}
                            value={JSON.stringify({ answer, page })}
                            {...register(`questionary-${page}-${index}`)}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-row items-center justify-end gap-4">
          <button
            type="button"
            className="w-40 h-12 mt-10 bg-cyan-500 hover:bg-cyan-600 rounded"
            onClick={handleGoBack}
          >
            Voltar
          </button>
          <button className="w-40 h-12 mt-10 bg-cyan-500 hover:bg-cyan-600 rounded">
            Avançar
          </button>
        </div>
      </form>
    </main>
  );
}
