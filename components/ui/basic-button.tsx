'use-client'
import styles from '@/app/globals.module.css';

interface BasicButtonProps {
    title: string;
    action: () => void;
}

export const BasicButton: React.FC<BasicButtonProps> = ({
    title,
    action,
}) => {
    return (
        <button
            onClick={action}
            className={`bg-white text-gray-800 font-bold py-2 px-6 rounded-lg text-lg relative overflow-hidden group ${styles.button}`}
        >
            <span className="relative z-10">{title}</span>
            <span className={`absolute inset-0 bg-blue-500 opacity-20 ${styles.buttonHoverEffect}`} />
        </button>
    );
};