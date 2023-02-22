import { getPuzzles } from '@/lib/puzzles';
import Puzzles from '@/ui/Puzzles';

export default async function Page() {
  const data = await getPuzzles();

  return (
    <div className="flex flex-col space-y-6">
      <Puzzles data={data} />
    </div>
  );
}
