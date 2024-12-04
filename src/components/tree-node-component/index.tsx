import { TreeNode } from '@app/utils/tree';
import { Bolt, Circle, CodePen, Cube, Location } from '@assets/icons';

import styles from './styles.module.scss';

type TreeNodeProps = {
  node: TreeNode;
};

export const TreeNodeComponent = ({ node }: TreeNodeProps) => {
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
      return <span className={`${styles.icon} ${color}`}>{icon}</span>;
    }
    return null;
  };

  return (
    <div className={styles.node}>
      <div className={styles.nodeContent}>
        {getLeftIcon()}
        <span className={styles.name}>{node.name}</span>
        {getComponentIcon()}
      </div>
      {/* Render children recursively */}
      {node.children.length > 0 && (
        <div className={styles.children}>
          {node.children.map(child => (
            <TreeNodeComponent key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};
