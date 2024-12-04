import React, { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

type Element = {
  id: string;
  name: string;
};

type SegmentedGroupProps = {
  elements: Element[];
  selectedId: string;
  setSelectedId: Dispatch<SetStateAction<string>>;
  icon?: React.ReactNode;
};

const SegmentedGroup = ({ elements, selectedId, setSelectedId, icon }: SegmentedGroupProps) => {
  const handleButtonClick = (id: string) => {
    setSelectedId(id);
  };

  return (
    <div className={styles.segmentedGroup}>
      {elements.map(element => (
        <button
          key={element.id}
          className={classNames(styles.button, {
            [styles.active]: element.id === selectedId,
          })}
          onClick={() => handleButtonClick(element.id)}
        >
          {icon && <span className={styles.icon}>{icon}</span>}
          {`${element.name} Unit`}
        </button>
      ))}
    </div>
  );
};

export default SegmentedGroup;
