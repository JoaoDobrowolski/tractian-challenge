import { Dispatch, SetStateAction, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

type FilterProps = {
  id: string;
  name: string;
  selectedFilters: string[];
  setSelectedFilters: Dispatch<SetStateAction<string[]>>;
  icon?: ReactNode;
};

export default function Filter({
  id,
  name,
  selectedFilters,
  setSelectedFilters,
  icon,
}: FilterProps) {
  const isSelected = selectedFilters.includes(id);

  const handleClick = () => {
    if (isSelected) {
      return setSelectedFilters(selectedFilters.filter(filter => filter !== id));
    }
    setSelectedFilters([...selectedFilters, id]);
  };

  return (
    <button
      className={classNames(styles.filter, { [styles.selected]: isSelected })}
      onClick={handleClick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.name}>{name}</span>
    </button>
  );
}
