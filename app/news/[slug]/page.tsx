import { getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";

interface PageProps {
  params: {
    slug: string;
  };
  searchParams?: {
    dk?: string;
  };
}

export async function generateStaticParams() {
  const data = await getNewsList(); // 例：全ニュース記事取得
  return data.contents.map((item) => ({
    slug: item.id,
  }));
}

// test
export default async function Page({ params, searchParams }: PageProps) {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams?.dk,
  }).catch(() => notFound());
  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news"> ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
