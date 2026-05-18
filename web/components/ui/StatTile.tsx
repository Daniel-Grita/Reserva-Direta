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
  mobileDark?: boolean;
};

export default function StatTile({ stat, run, index, startDelayBase = 700, mobileDark }: Props) {
  const value = useCountUp(stat.target, run, {
    duration: 1100,
    startDelay: startDelayBase + index * 140,
  });
  const settled = value >= stat.target;
  const { prefix = '', suffix = '', displayOverride } = stat;
  const display = settled
    ? (displayOverride ?? `${prefix}${stat.target}${suffix}`)
    : `${prefix}${value}${suffix}`;

  const wrapCls = mobileDark ? 'py-5 sm:py-0' : '';
  const numCls = mobileDark ? 'text-white sm:text-navy' : 'text-navy';
  const barCls = mobileDark ? 'scale-x-100 sm:scale-x-0 sm:group-hover:scale-x-100' : 'scale-x-0 group-hover:scale-x-100';
  const labelCls = mobileDark ? 'text-white/70 sm:text-n-600' : 'text-n-600';

  return (
    <div className={`group text-left sm:text-center ${wrapCls}`}>
      <div className="relative inline-block mb-2">
        <div className={`text-display-md font-display leading-none tabular-nums ${numCls}`}>
          {display}
        </div>
        <span
          aria-hidden
          className={`absolute left-0 -bottom-1.5 h-[3px] w-10 origin-left rounded-full bg-orange transition-transform duration-300 ease-out motion-reduce:transition-none ${barCls}`}
        />
      </div>
      <p className={`text-body-sm font-body max-w-[11rem] sm:mx-auto leading-snug text-balance ${labelCls}`}>
        {stat.label.split('\n').map((line, idx) => (
          <span key={idx} className="block">
            {keepLastTwoTogether(line)}
          </span>
        ))}
      </p>
    </div>
  );
}
