import { cn } from '@/lib/utils';

type ContainerVariant = 'default' | 'small' | 'mini';

export default function CentralContainer({
  children,
  className,
  variant = 'default',
  withPadding = true
}: {
  children?: React.ReactNode;
  className?: string;
  variant?: ContainerVariant;
  withPadding?: boolean;
}) {
  return (
    <div
      className={cn(
        'mx-auto w-screen max-w-[1800px]',
        className,
        withPadding && 'max-w-[1832px] px-4',
        withPadding && variant == 'small' && 'lg:px-[min(10%,135px)]',
        withPadding && variant == 'mini' && 'lg:px-[min(15%,252px)]'
      )}
    >
      {children}
    </div>
  );
}
