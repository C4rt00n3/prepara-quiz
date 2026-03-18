import Link from "next/link";
import { notFound } from "next/navigation";
import { QuizClient } from "@/components/quiz-client";
import { getAllTests, getTestBySlug } from "@/lib/tests";
import styles from "@/app/styles/test-detail-page.module.css";

type TestPageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Prebuilds static params for every test file under data/.
 */
export async function generateStaticParams() {
  const tests = await getAllTests();

  return tests.map((test) => ({
    slug: test.slug,
  }));
}

/**
 * Test detail route with quiz interaction by slug.
 */
export default async function TestPage({ params }: TestPageProps) {
  const { slug } = await params;
  const test = await getTestBySlug(slug);

  if (!test) {
    notFound();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.topbar}>
        <Link href="/" className={styles.backLink}>
          <span className={styles.backIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M12 3.5 3 10.4V21h6.75v-5.25h4.5V21H21V10.4l-9-6.9Z" />
            </svg>
          </span>
          <span>Voltar para o inicio</span>
        </Link>
      </div>

      <QuizClient test={test} slug={slug} />
    </div>
  );
}
