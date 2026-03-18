import Link from "next/link";
import { notFound } from "next/navigation";
import { ResultCard } from "@/components/result-card";
import { getAllTests } from "@/lib/tests";
import type { TestSummary } from "@/types/test";
import styles from "@/app/styles/result-page.module.css";

type ResultPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ acertos?: string; total?: string }>;
};

const MINIMUM_PERCENTAGE_TO_UNLOCK = 70.5;

function getLessonNumber(lesson: string) {
  const match = lesson.match(/aula\s*(\d+)/i);
  return match ? Number(match[1]) : null;
}

function getAdjacentLessonSlug(
  tests: TestSummary[],
  currentTest: TestSummary,
  direction: "next" | "previous",
) {
  const currentLessonNumber = getLessonNumber(currentTest.lesson);

  if (currentLessonNumber === null) {
    return null;
  }

  const sameTrackTests = tests
    .filter((test) => test.subject === currentTest.subject && test.level === currentTest.level)
    .sort((a, b) => (getLessonNumber(a.lesson) ?? Number.MAX_SAFE_INTEGER) - (getLessonNumber(b.lesson) ?? Number.MAX_SAFE_INTEGER));

  const currentIndex = sameTrackTests.findIndex((test) => test.slug === currentTest.slug);

  if (currentIndex === -1) {
    return null;
  }

  const adjacentTest = direction === "next" ? sameTrackTests[currentIndex + 1] : sameTrackTests[currentIndex - 1];
  return adjacentTest?.slug ?? null;
}

/**
 * Prebuilds static params for each test result route.
 */
export async function generateStaticParams() {
  const tests = await getAllTests();

  return tests.map((test) => ({
    slug: test.slug,
  }));
}

/**
 * Dedicated result page displayed only after the user submits the test.
 */
export default async function ResultPage({ params, searchParams }: ResultPageProps) {
  const { slug } = await params;
  const query = await searchParams;
  const tests = await getAllTests();

  const score = Number.parseInt(query.acertos ?? "", 10);
  const total = Number.parseInt(query.total ?? "", 10);

  if (!Number.isFinite(score) || !Number.isFinite(total) || total <= 0 || score < 0 || score > total) {
    notFound();
  }

  const percentage = (score / total) * 100;
  const hasUnlockedNextLesson = percentage >= MINIMUM_PERCENTAGE_TO_UNLOCK;
  const currentTest = tests.find((test) => test.slug === slug);

  if (!currentTest) {
    notFound();
  }

  const nextLessonSlug = getAdjacentLessonSlug(tests, currentTest, "next");
  const previousLessonSlug = getAdjacentLessonSlug(tests, currentTest, "previous");

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <p className={styles.kicker}>Teste finalizado</p>
        <ResultCard score={score} total={total} />

        <div className={styles.actions}>
          {previousLessonSlug ? (
            <Link href={`/teste/${previousLessonSlug}`} className={styles.secondaryButton}>
              Voltar para aula anterior
            </Link>
          ) : null}
          <Link href={`/teste/${slug}`} className={styles.secondaryButton}>
            Refazer teste
          </Link>
          {nextLessonSlug ? (
            hasUnlockedNextLesson ? (
              <Link href={`/teste/${nextLessonSlug}`} className={styles.primaryButton}>
                Ir para a proxima aula
              </Link>
            ) : (
              <p className={styles.lockedMessage}>
                Atinga no minimo {MINIMUM_PERCENTAGE_TO_UNLOCK.toFixed(1).replace(".", ",")}% para liberar a proxima aula.
              </p>
            )
          ) : null}
          <Link href="/" className={styles.homeButton}>
            <span className={styles.homeButtonIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M12 3.5 3 10.4V21h6.75v-5.25h4.5V21H21V10.4l-9-6.9Z" />
              </svg>
            </span>
            <span>Voltar para o inicio</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
