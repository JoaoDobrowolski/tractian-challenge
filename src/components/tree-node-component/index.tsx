import { TreeNode } from '@app/utils/tree';
import { CodePen, Cube, Location } from '@assets/icons';

import styles from './styles.module.scss';

type TreeNodeProps = {
  node: TreeNode;
};

export const TreeNodeComponent = ({ node }: TreeNodeProps) => {
  const getIcon = () => {
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

  return (
    <div className={styles.node}>
      <div className={styles.nodeContent}>
        {getIcon()}
        <span>{node.name}</span>
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
