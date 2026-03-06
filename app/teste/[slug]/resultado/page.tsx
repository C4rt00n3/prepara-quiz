import Link from "next/link";
import { notFound } from "next/navigation";
import { ResultCard } from "@/components/result-card";
import { getAllTests } from "@/lib/tests";
import styles from "@/app/styles/result-page.module.css";

type ResultPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ acertos?: string; total?: string }>;
};

const MINIMUM_PERCENTAGE_TO_UNLOCK = 70.5;

function getNextLessonSlug(currentSlug: string, allSlugs: string[]) {
  const slugMatch = currentSlug.match(/^(.*)-aula(\d+)$/i);

  if (!slugMatch) {
    return null;
  }

  const [, subjectPrefix, lessonNumber] = slugMatch;
  const nextLessonNumber = Number.parseInt(lessonNumber, 10) + 1;
  const nextSlug = `${subjectPrefix}-aula${nextLessonNumber}`;

  return allSlugs.includes(nextSlug) ? nextSlug : null;
}

function getPreviousLessonSlug(currentSlug: string, allSlugs: string[]) {
  const slugMatch = currentSlug.match(/^(.*)-aula(\d+)$/i);

  if (!slugMatch) {
    return null;
  }

  const [, subjectPrefix, lessonNumber] = slugMatch;
  const previousLessonNumber = Number.parseInt(lessonNumber, 10) - 1;

  if (previousLessonNumber <= 0) {
    return null;
  }

  const previousSlug = `${subjectPrefix}-aula${previousLessonNumber}`;

  return allSlugs.includes(previousSlug) ? previousSlug : null;
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
  const allSlugs = tests.map((test) => test.slug);
  const nextLessonSlug = getNextLessonSlug(
    slug,
    allSlugs,
  );
  const previousLessonSlug = getPreviousLessonSlug(slug, allSlugs);

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
          <Link href="/" className={styles.primaryButton}>
            Ir para home
          </Link>
        </div>
      </section>
    </main>
  );
}
