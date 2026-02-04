import Card from '../Card';
import {
  cardLabelPosition,
  monoLabelPosition,
  monoLabelCaps,
  smallCardHeaderText,
  monoLabel,
  modalButton,
} from '../../styles/stylingPatterns';
import { Pencil, Palette, Brush } from 'lucide-react';

const ArtCard = ({ onClick }) => {
  return (
    <Card className={cardLabelPosition}>
      <div className="h-full flex flex-col justify-between">
        <div className={monoLabelPosition}>
          <Pencil size={16} className="text-hideout-accent" />
          <span className={monoLabelCaps}>Creative_Side</span>
        </div>
        <div className="absolute -top-8 -right-8 text-slate-100 dark:text-white/5 z-0 pointer-events-none">
          <Palette
            size={120}
            strokeWidth={0.5}
            className="transition-transform duration-[3s] ease-in-out group-hover:rotate-45"
          />
        </div>
        <div>
          <div>
            <h3 className={smallCardHeaderText}>Digital Art</h3>
            <p className={monoLabel}>Procreate • Sketchbook</p>
          </div>
        </div>
        <button onClick={onClick} className={modalButton} title="Open Art Gallery">
          <Brush className="text-hideout-accent" size={24} />
        </button>
      </div>
    </Card>
  );
};

export default ArtCard;
