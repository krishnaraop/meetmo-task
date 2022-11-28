import { useCallback } from "react";
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
// 👇 you need to import the reactflow styles
import "reactflow/dist/style.css";

const youtubeIcon = () => {
  return <div style={{ color: black }}>holaa</div>;
};

const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 500 },
    data: { label: `youtubeIcon ` },
  },
  {
    id: "2",
    position: { x: 300, y: 300 },
    data: { label: "another video" },
    style: { stroke: "blue" },
  },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

function FlowComponent() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <Background />
    </ReactFlow>
  );
}
export default FlowComponent;
