import { Copy } from "lucide-react";

import Icon from "./Icon";
import Container from "./Container";

export default function FormEditor() {
  return (
    <Container
      header={
        <div className="pl-3 pr-2 py-1 flex justify-between items-center">
          <h1 className="text-sm font-semibold p-2 text-text">editor</h1>

          <button className="p-2 rounded-md hover:bg-border">
            <Icon icon={Copy} />
          </button>
        </div>
      }
    >
      <div className="font-code text-xs"># Readme_Preview</div>
    </Container>
  );
}
