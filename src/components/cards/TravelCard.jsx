import {
  cardLabelPosition,
  monoLabelPosition,
  monoLabelCaps,
  smallCardHeaderText,
  monoLabel,
  modalButton,
} from '../../styles/stylingPatterns';
import Card from '../Card';
import { MapPin, Compass, Image as ImageIcon } from 'lucide-react';

const TravelCard = ({ onClick }) => {
  return (
    <Card className={cardLabelPosition}>
      {/* Wrap the content in a div that triggers the click */}
      <div
        className="h-full flex flex-col justify-between"
        // onClick={() => setShowTravelModal(true)}
      >
        <div className={monoLabelPosition}>
          <MapPin size={16} className="text-hideout-accent" />
          <span className={monoLabelCaps}>Travel_Log</span>
        </div>
        <div className="absolute -top-12 -right-12 text-slate-100 dark:text-white/5 z-0 pointer-events-none">
          <Compass
            size={140}
            strokeWidth={0.5}
            className="transition-transform duration-[3s] ease-in-out group-hover:rotate-45"
          />
        </div>

        <div>
          <h3 className={smallCardHeaderText}>Singapore</h3>
          <p className={monoLabel}>base_of_ops</p>
        </div>
      </div>
      <button onClick={onClick} className={modalButton} title="Open Travel Gallery">
        <ImageIcon className="text-hideout-accent" size={24} />
      </button>
    </Card>
  );
};

export default TravelCard;
