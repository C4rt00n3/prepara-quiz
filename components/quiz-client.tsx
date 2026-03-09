"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { QuestionCard } from "@/components/question-card";
import { QuizHeader } from "@/components/quiz-header";
import type { Question, TestData } from "@/types/test";
import styles from "@/app/styles/quiz-page.module.css";

type QuizClientProps = {
  test: TestData;
  slug: string;
};

type AnswerMap = Record<string, string>;
type QuizLevel = "basico" | "avancado";

/**
 * Normalizes persisted difficulty values to a comparable key.
 */
function normalizeDifficulty(value: Question["difficulty"] | string) {
  const normalized = String(value).trim().toLowerCase();

  if (normalized === "facil") {
    return "facil";
  }

  if (normalized === "medio") {
    return "medio";
  }

  if (normalized === "dificil") {
    return "dificil";
  }

  return "medio";
}

/**
 * Filters visible questions according to the selected level.
 */
function filterQuestionsByLevel(questions: Question[], level: QuizLevel) {
  const filtered = questions.filter((question) => {
    const difficulty = normalizeDifficulty(question.difficulty);

    if (level === "basico") {
      return difficulty !== "dificil";
    }

    return difficulty !== "facil";
  });

  return filtered.length > 0 ? filtered : questions;
}

/**
 * Shuffles question order with Fisher-Yates.
 */
function shuffleQuestions(questions: Question[], seed: number) {
  const shuffled = [...questions];
  let state = seed || 1;

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    state = (state * 1664525 + 1013904223) % 4294967296;
    const randomIndex = Math.floor((state / 4294967296) * (i + 1));
    const temp = shuffled[i];
    shuffled[i] = shuffled[randomIndex];
    shuffled[randomIndex] = temp;
  }

  return shuffled;
}

/**
 * Renders the interactive quiz flow and redirects to the result screen on submit.
 */
export function QuizClient({ test, slug }: QuizClientProps) {
  const router = useRouter();
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [selectedLevel, setSelectedLevel] = useState<QuizLevel>("avancado");
  const [activeLevel, setActiveLevel] = useState<QuizLevel>("avancado");
  const [selectedShuffle, setSelectedShuffle] = useState(false);
  const [isShuffleActive, setIsShuffleActive] = useState(false);
  const [shuffleSeed, setShuffleSeed] = useState(1);

  const visibleQuestions = useMemo(() => {
    const levelQuestions = filterQuestionsByLevel(test.questions, activeLevel);

    if (!isShuffleActive) {
      return levelQuestions;
    }

    return shuffleQuestions(levelQuestions, shuffleSeed);
  }, [activeLevel, isShuffleActive, shuffleSeed, test.questions]);

  const score = useMemo(() => {
    return visibleQuestions.reduce((total, question) => {
      if (answers[question.id] === question.correctOptionId) {
        return total + 1;
      }

      return total;
    }, 0);
  }, [answers, visibleQuestions]);

  /**
   * Updates a selected option for a given question.
   */
  const handleSelectOption = (questionId: string, optionId: string) => {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: optionId,
    }));
  };

  /**
   * Applies current level and shuffle settings and restarts answer state.
   */
  const handleApplySettings = () => {
    setActiveLevel(selectedLevel);
    setIsShuffleActive(selectedShuffle);
    setShuffleSeed((current) => current + 1);
    setAnswers({});
  };

  /**
   * Redirects to a dedicated result page after computing the final score.
   */
  const handleSubmit = () => {
    if (visibleQuestions.length === 0) {
      return;
    }

    const query = new URLSearchParams({
      acertos: String(score),
      total: String(visibleQuestions.length),
    });

    router.push(`/teste/${slug}/resultado?${query.toString()}`);
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <QuizHeader title={test.title} subject={test.subject} lesson={test.lesson} />

        <section className={styles.settingsCard}>
          <div className={styles.settingsRow}>
            <label className={styles.selectLabel}>
              Nivel
              <select
                value={selectedLevel}
                onChange={(event) => setSelectedLevel(event.target.value as QuizLevel)}
              >
                <option value="basico">Basico</option>
                <option value="avancado">Avancado</option>
              </select>
            </label>

            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={selectedShuffle}
                onChange={(event) => setSelectedShuffle(event.target.checked)}
              />
              Embaralhar questoes
            </label>
          </div>

          <div className={styles.settingsActions}>
            <button type="button" className={styles.applyButton} onClick={handleApplySettings}>
              Aplicar configuracoes
            </button>
            <span className={styles.settingsInfo}>
              Nivel ativo: {activeLevel} | Questoes ativas: {visibleQuestions.length}
            </span>
          </div>
        </section>

        <section className={styles.questions}>
          {visibleQuestions.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              questionNumber={index + 1}
              selectedOptionId={answers[question.id]}
              onSelectOption={handleSelectOption}
            />
          ))}
        </section>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.submitButton}
            onClick={handleSubmit}
            disabled={visibleQuestions.length === 0}
          >
            Concluir Teste
          </button>
        </div>
      </div>
    </main>
  );
}
