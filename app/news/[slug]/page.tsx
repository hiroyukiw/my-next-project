import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";

// type NewsDetailPageProps = {
//   params: {
//     slug: string;
//   };
//   searchParams: {
//     dk?: string;
//   };
// };

// test
export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { dk?: string };
}) {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);
  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news"> ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}

// ISR/staticに必要（使ってなくても必要）
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return [];
}
