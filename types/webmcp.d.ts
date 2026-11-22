interface WebMCPToolContent {
  type: "text";
  text: string;
}

interface WebMCPToolResult {
  content: WebMCPToolContent[];
  isError?: boolean;
}

interface WebMCPToolDefinition {
  name: string;
  description: string;
  inputSchema: {
    type: "object";
    properties: Record<
      string,
      {
        type: string;
        description?: string;
        enum?: string[];
      }
    >;
    required?: string[];
  };
  execute: (args: Record<string, any>) => Promise<WebMCPToolResult>;
}

interface ModelContext {
  registerTool: (
    tool: WebMCPToolDefinition,
    options?: { signal?: AbortSignal }
  ) => void;
}

interface Navigator {
  readonly modelContext?: ModelContext;
}