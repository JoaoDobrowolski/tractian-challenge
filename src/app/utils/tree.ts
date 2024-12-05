export type TreeNode = {
  id: string;
  name: string;
  type: 'location' | 'asset' | 'component';
  children: TreeNode[];
  sensorType?: string | null;
  status?: string | null;
  parentId?: string | null;
  sensorId?: string | undefined;
};

export const buildTree = (
  locations: { id: string; name: string; parentId: string | null }[],
  assetsAndComponents: {
    id: string;
    name: string;
    locationId: string | null;
    parentId: string | null;
    sensorType?: string | null;
    status?: string | null;
    sensorId?: string | undefined;
  }[]
): { tree: TreeNode[]; map: Record<string, TreeNode> } => {
  const map: Record<string, TreeNode> = {};

  // Add locations to the map
  locations.forEach(location => {
    map[location.id] = {
      id: location.id,
      name: location.name,
      type: 'location',
      parentId: location.parentId,
      children: [],
    };
  });

  // Add assets and components to the map
  assetsAndComponents.forEach(asset => {
    map[asset.id] = {
      id: asset.id,
      name: asset.name,
      type: asset.sensorType ? 'component' : 'asset',
      parentId: asset.parentId || asset.locationId,
      children: [],
      sensorType: asset.sensorType || null,
      status: asset.status || null,
      sensorId: asset.sensorId || undefined,
    };
  });

  // Link children to their parents
  Object.values(map).forEach(node => {
    if (node.parentId && map[node.parentId]) {
      map[node.parentId].children.push(node);
    }
  });

  // Filter and return the root nodes for the tree and the flat map
  const tree = Object.values(map).filter(node => !node.parentId);

  return { tree, map };
};
