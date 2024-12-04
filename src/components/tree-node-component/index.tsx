import { TreeNode } from '@app/utils/tree';
import React from 'react';

type TreeNodeProps = {
  node: TreeNode;
};

export const TreeNodeComponent: React.FC<TreeNodeProps> = ({ node }) => {
  return (
    <div>
      <div>
        <span>{node.name}</span>
      </div>
      {node.children.length > 0 && (
        <div style={{ marginLeft: '20px' }}>
          {node.children.map(child => (
            <TreeNodeComponent key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};
