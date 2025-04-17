import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";

// Next.js 15.2.3に合わせた型定義
type NewsPageProps = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

export default async function Page({ params, searchParams }: NewsPageProps) {
  // エラーハンドリングを強化
  if (!params.slug) {
    return notFound();
  }

  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(() => {
    return notFound();
  });

  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}

// Next.js 15.2.3での推奨される書き方
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  // 実際の実装ではここでスラッグのリストを返す
  return [];
}
