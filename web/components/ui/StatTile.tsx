'use client';

import { useCountUp } from '@/lib/useCountUp';
import { keepLastTwoTogether } from '@/lib/highlight';

export type StatTileData = {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
  displayOverride?: string;
};

type Props = {
  stat: StatTileData;
  run: boolean;
  index: number;
  startDelayBase?: number;
};

export default function StatTile({ stat, run, index, startDelayBase = 700 }: Props) {
  const value = useCountUp(stat.target, run, {
    duration: 1100,
    startDelay: startDelayBase + index * 140,
  });
  const settled = value >= stat.target;
  const { prefix = '', suffix = '', displayOverride } = stat;
  const display = settled
    ? (displayOverride ?? `${prefix}${stat.target}${suffix}`)
    : `${prefix}${value}${suffix}`;

  return (
    <div className="group text-center">
      <div className="relative inline-block mb-2">
        <div className="text-display-md font-display text-navy leading-none tabular-nums">
          {display}
        </div>
        <span
          aria-hidden
          className="absolute left-0 -bottom-1.5 h-[3px] w-10 origin-left scale-x-0 rounded-full bg-orange transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
        />
      </div>
      <p className="text-body-sm font-body text-n-600">
        {stat.label.split('\n').map((line, idx) => (
          <span key={idx} className="block">
            {keepLastTwoTogether(line)}
          </span>
        ))}
      </p>
    </div>
  );
}
