import { cn } from '@/lib/utils';
import CentralContainer from './central-container';

export default function PageHeader({
  children,
  className
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <CentralContainer>
      <div
        className={cn(
          'flex min-h-[172px] items-center justify-center rounded-[24px] bg-[#ffce67] p-8 text-center text-[2.5rem] leading-[2.75rem] font-medium tracking-[-.02em] lg:min-h-[304px] lg:text-[5rem] lg:leading-[5.5rem]',
          className
        )}
      >
        {children}
      </div>
    </CentralContainer>
  );
}
