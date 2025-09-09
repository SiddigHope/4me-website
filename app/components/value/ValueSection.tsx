import { useTranslation } from 'next-i18next';
import ValueFeature from './ValueFeature';

const ValueSection = () => {
    const {t} = useTranslation();
  const features = [
    {
      title: t('features.f_fast'),
      description: t('features.f_fast_desc'),
      icon: '/icons/fast.svg',
    //   icon: <Fast className="object-contain text-[#FF8242] fill-current" />,
    },
    {
      title: t('features.f_secure'),
      description: t('features.f_secure_desc'),
      icon: '/icons/secure.svg',
    //   icon: <Secure className="object-contain text-[#FF8242] fill-current" />,
    },
    {
      title: t('features.f_sync'),
      description: t('features.f_sync_desc'),
      icon: '/icons/sync.svg',
    //   icon: <Sync className="object-contain text-[#FF8242] fill-current" />,
    },
    {
      title: t('features.f_personalized'),
      description: t('features.f_personalized_desc'),
      icon: '/icons/personalize.svg',
    //   icon: <Personalize className="object-contain text-[#FF8242] fill-current" />,
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-[#203260] mb-4">{t('features.title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('features.description')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <ValueFeature
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
