import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  labelClassName?: string;
  arrowSize?: number;
}

export function CTAButton({
  href,
  children,
  className = '',
  labelClassName = '',
  arrowSize = 24,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 rounded-full bg-darkBlue text-offWhite font-semibold hover:bg-darkBlue/90 transition-all duration-300 group ${className}`}
    >
      <span className={`${labelClassName} font-NeueMontreal`}>{children}</span>
      <ArrowRight
        size={arrowSize}
        className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
      />
    </Link>
  );
}

