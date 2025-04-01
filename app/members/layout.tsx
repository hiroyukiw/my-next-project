import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

type Props = {
  children: React.ReactNode;
};

export default function Rootlayout({ children }: Props) {
  return (
    <>
      <Hero title="Members" sub="メンバー"></Hero>
      <Sheet>{children}</Sheet>
    </>
  );
}
