import { useState } from 'react';
import { TreeNode } from '@app/utils/tree';
import { Bolt, Circle, CodePen, Cube, Location, TreeSwitcher } from '@assets/icons';
import styles from './styles.module.scss';
import classNames from 'classnames';

type TreeNodeProps = {
  node: TreeNode;
  selectedComponent: TreeNode | null;
  // eslint-disable-next-line no-unused-vars
  setSelectedComponent: (node: TreeNode) => void;
};

export const TreeNodeComponent = ({
  node,
  selectedComponent,
  setSelectedComponent,
}: TreeNodeProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const getLeftIcon = () => {
    switch (node.type) {
      case 'location':
        return <Location className={styles.icon} />;
      case 'asset':
        return <Cube className={styles.icon} />;
      case 'component':
        return <CodePen className={styles.icon} />;
      default:
        return null;
    }
  };

  const getComponentIcon = () => {
    if (node.type === 'component') {
      const icon = node.sensorType === 'energy' ? <Bolt /> : <Circle />;
      const color = node.status === 'alert' ? styles.red : styles.green;
      return <span className={color}>{icon}</span>;
    }
    return null;
  };

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleClick = () => {
    if (node.type === 'component') {
      setSelectedComponent(node);
    }
  };

  return (
    <div
      className={classNames(styles.node, {
        [styles.clickable]: node.type === 'component',
        [styles.selected]: selectedComponent?.id === node.id,
      })}
      onClick={handleClick}
    >
      <div className={styles.nodeContent}>
        {node.children.length > 0 && (
          <button
            className={`${styles.treeSwitcher} ${isCollapsed ? styles.collapsed : ''}`}
            onClick={handleToggle}
            aria-label={isCollapsed ? 'Expand node' : 'Collapse node'}
          >
            <TreeSwitcher />
          </button>
        )}
        {getLeftIcon()}
        <span className={styles.name}>{node.name}</span>
        {getComponentIcon()}
      </div>
      {!isCollapsed && node.children.length > 0 && (
        <div className={styles.children}>
          {node.children.map(child => (
            <TreeNodeComponent
              key={child.id}
              node={child}
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          ))}
        </div>
      )}
    </div>
  );
};
