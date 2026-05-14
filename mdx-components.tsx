import type { MDXComponents } from "mdx/types";
import { FourMAT } from "@/components/FourMAT";
import { Callout } from "@/components/Callout";
import { Hook } from "@/components/Hook";
import { ClaudeCodePath } from "@/components/ClaudeCodePath";
import { WalkOut } from "@/components/WalkOut";
import { ToolVsInfraTable } from "@/components/ToolVsInfraTable";
import { MaturityLadder } from "@/components/MaturityLadder";
import { Step } from "@/components/Step";
import { GapStatement } from "@/components/GapStatement";
import { InteractiveGapStatement } from "@/components/InteractiveGapStatement";
import { ModuleComplete } from "@/components/ModuleComplete";
import { ModuleMeta } from "@/components/ModuleMeta";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    FourMAT,
    Callout,
    Hook,
    ClaudeCodePath,
    WalkOut,
    ToolVsInfraTable,
    MaturityLadder,
    Step,
    GapStatement,
    InteractiveGapStatement,
    ModuleComplete,
    ModuleMeta,
    ...components,
  };
}
