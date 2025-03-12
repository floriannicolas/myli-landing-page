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
          'bg-[#ffce67] rounded-[24px] p-8 flex text-center items-center justify-center font-medium text-[2.5rem] leading-[2.75rem] lg:text-[5rem] lg:leading-[5.5rem] tracking-[-.02em] min-h-[172px] lg:min-h-[304px]',
          className
        )}
      >
        {children}
      </div>
    </CentralContainer>
  );
}
