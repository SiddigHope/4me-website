import Image from 'next/image';
import { JSX } from 'react';
import styles from './icon.module.css';

interface ValueFeatureProps {
  title: string;
  description: string;
//   icon: JSX.Element;
  icon: string | JSX.Element;
}

const ValueFeature = ({ title, description, icon }: ValueFeatureProps) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="w-16 h-16 mb-4 relative">
        <Image
          src={icon}
          color='#FF8242'
          alt={`${title} icon`}
          fill
           className={styles.coloredIcon}
        //   className="object-contain text-[#FF8242]"
        />
        {/* {icon} */}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#203260]">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ValueFeature;
