import Link from 'next/link';
import { HeaderItem } from '@/types/menu';

interface MobileHeaderProps {
  item: HeaderItem;
  onClose?: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ item, onClose }) => {
  return (
    <li className="w-full">
      <Link
        href={item.href}
        onClick={onClose}
        className="block text-darkBlue hover:text-primaryYellow hover:bg-gray-50 rounded-md text-base font-medium font-NeueMontreal transition-colors duration-200 w-full p-3 px-4"
      >
        {item.label}
      </Link>
    </li>
  );
};

export default MobileHeader;

