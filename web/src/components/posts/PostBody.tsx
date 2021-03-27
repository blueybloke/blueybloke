import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import Code from "./Code";
import Figure from "./Figure";

interface Props {
  blocks: any;
  projectId?: string;
  dataset?: string;
}

const serializers = {
  types: {
    code: Code,
    image: Figure,
  },
};

const PostBody: React.FC<Props> = ({ blocks, projectId, dataset }) => {
  return (
    <BlockContent
      blocks={blocks}
      serializers={serializers}
      projectId={projectId}
      dataset={dataset}
    />
  );
};

export default PostBody;
