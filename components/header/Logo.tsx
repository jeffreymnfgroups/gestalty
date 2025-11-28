import Image from 'next/image';
import Link from 'next/link';
import { logo } from '@/public';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center transition-opacity duration-200 hover:opacity-80">
      <Image
        src={logo}
        alt="logo"
        width={117}
        height={34}
        className="object-contain"
        style={{ width: 'auto', height: '34px', maxWidth: '117px' }}
        quality={100}
        priority={true}
      />
    </Link>
  );
};

export default Logo;

