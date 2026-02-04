import { statusLabel, modalButton } from '../../styles/stylingPatterns';
import Card from '../Card';
import { Terminal } from 'lucide-react';

const EduCard = ({ onClick }) => {
  return (
    <Card className="lg:col-span-1 lg:row-span-2 flex flex-col justify-between bg-gradient-to-b from-white to-zinc-50 dark:from-hideout-card dark:to-[#162032]">
      <div>
        <span className={statusLabel}>ACTIVE STATUS</span>
        <h3 className="text-xl font-bold mt-4 text-slate-900 dark:text-white">
          M.Tech Software Engineering
        </h3>
        <p className={'text-sm text-slate-500 dark:text-hideout-muted mt-2'}>
          NUS-ISS (2026-current)
        </p>

        {/* Hidden on Mobile */}
        <ul className=" hidden md:block mt-6 space-y-3 text-sm text-slate-600 dark:text-hideout-muted">
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-hideout-accent" /> Architecting Software
            Solutions
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-hideout-accent" /> Advanced DevOps Practices
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-hideout-accent" /> Agile Methodology
          </li>
        </ul>
      </div>

      <button
        onClick={onClick}
        className={modalButton}
        title="View System Logs (Education & History)"
      >
        <Terminal className="text-hideout-accent" size={24} />
      </button>
    </Card>
  );
};

export default EduCard;
