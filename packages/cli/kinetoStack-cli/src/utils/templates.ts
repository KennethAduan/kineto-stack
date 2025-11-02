import { Template } from "../types";

// Base repository URL for the turbo repo
const KINETOSTACK_REPO = "https://github.com/KennethAduan/kinetoStack.git";

export const templates: Template[] = [
  {
    id: "bun-nextjs-mantine",
    name: "KinetoStack Bun Next.js Mantine",
    description: "Next.js 16 + Bun + Mantine + TanStack Query + Jotai",
    repository: `${KINETOSTACK_REPO}#packages/templates/next/next-js-bun-mantine`,
    packageManager: "bun",
  },
  {
    id: "vite-shadcn",
    name: "KinetoStack Vite ShadCN",
    description:
      "Vite + React + ShadCN + Tailwind CSS + TanStack Query + Jotai + TanStack Router",
    repository: `${KINETOSTACK_REPO}#packages/templates/vite/vite-bun-shadcn`,
    packageManager: "bun",
  },
];

export function getTemplateById(id: string): Template | undefined {
  return templates.find((template) => template.id === id);
}

export function getTemplateChoices() {
  return templates.map((template) => ({
    name: `${template.name} - ${template.description}`,
    value: template.id,
  }));
}
