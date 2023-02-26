'use client';

import { Chapter, Puzzle } from '@/lib/puzzles';
import AppLink from './AppLink';
import Icon from './Icon';

export default function Puzzles({ data }: { data: { chapters: Chapter[]; puzzles: Puzzle[] } }) {
  // const { data, isLoading } = usePuzzles();
  return (
    <>
      {data?.chapters?.map((chapter) => (
        <div key={chapter.id} className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">
              Chapitre {chapter.id} - {chapter.name}
            </h3>
            <div className="h-1 w-1/4 rounded-lg bg-gray-200">
              <div className="h-1 w-1/2 rounded-lg bg-brand" />
            </div>
          </div>
          <ul className="flex flex-col space-y-4">
            {data?.puzzles.map((puzzle) => (
              <AppLink key={puzzle.id} href={`/dashboard/puzzles/${puzzle.id}`}>
                <li className="group flex justify-between rounded-md bg-primary-700 p-4 font-code hover:bg-primary-600">
                  <span className="font-semibold">{puzzle.name}</span>
                  <Icon
                    className="-translate-x-2 transform-gpu duration-300 group-hover:translate-x-0"
                    name="arrow-right-line"
                  />
                </li>
              </AppLink>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}