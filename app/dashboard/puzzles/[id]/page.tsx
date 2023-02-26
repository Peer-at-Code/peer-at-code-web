import { getPuzzle } from '@/lib/puzzles';
import Puzzle from '@/ui/Puzzle';
import { notFound } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function generateMetadata({ params }: { params: { id: number } }) {
  const { id } = params;

  const puzzle = await getPuzzle(id);

  return { title: `${puzzle.name} - Peer-at Code` };
}

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = params;

  const puzzle = await getPuzzle(id);

  if (!puzzle) {
    notFound();
  }

  return <Puzzle puzzle={puzzle} />;
}

// export async function generateStaticParams() {
//   const { puzzles } = await getPuzzles();
//   // every id is a number, but we need to return a string
//   return puzzles.map((puzzle) => ({ id: puzzle.id.toString() }));
// }
