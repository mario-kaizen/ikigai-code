import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/Callout";
import { Hook } from "@/components/Hook";
import { ClaudeCodePath } from "@/components/ClaudeCodePath";
import { WalkOut } from "@/components/WalkOut";
import { ToolVsInfraTable } from "@/components/ToolVsInfraTable";
import { MaturityLadder } from "@/components/MaturityLadder";
import { Step } from "@/components/Step";
import { InteractiveGapStatement } from "@/components/InteractiveGapStatement";
import { FrictionToRule } from "@/components/FrictionToRule";
import { RuleBuilder } from "@/components/RuleBuilder";
import { SourceOfTruthMap } from "@/components/SourceOfTruthMap";
import { VoiceDNABuilder } from "@/components/VoiceDNABuilder";
import { ModeBuilder } from "@/components/ModeBuilder";
import { CompoundingPlan } from "@/components/CompoundingPlan";
import { ModuleComplete } from "@/components/ModuleComplete";
import { ModuleMeta } from "@/components/ModuleMeta";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    Hook,
    ClaudeCodePath,
    WalkOut,
    ToolVsInfraTable,
    MaturityLadder,
    Step,
    InteractiveGapStatement,
    FrictionToRule,
    RuleBuilder,
    SourceOfTruthMap,
    VoiceDNABuilder,
    ModeBuilder,
    CompoundingPlan,
    ModuleComplete,
    ModuleMeta,
    ...components,
  };
}
