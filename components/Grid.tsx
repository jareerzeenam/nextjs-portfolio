import { gridItems } from '@/data';
import dynamic from 'next/dynamic';

const BentoGrid = dynamic(
  () =>
    import('./ui/BentoGrid').then((mod) => ({
      default: mod.BentoGrid,
    })),
  { ssr: false }
);

const BentoGridItem = dynamic(
  () =>
    import('./ui/BentoGrid').then((mod) => ({
      default: mod.BentoGridItem,
    })),
  { ssr: false }
);

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem key={item.id} {...item} />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
