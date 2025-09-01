import path from 'path';
import { Schema, RegistryType } from './registry-schema';

type ComponentDefinition = Partial<
  Pick<
    Schema,
    | 'dependencies'
    | 'devDependencies'
    | 'registryDependencies'
    | 'cssVars'
    | 'tailwind'
  >
> & {
  name: string;
  path: string;
  description: string;
  files?: {
    name: string;
    path: string;
    type?: RegistryType;
  }[];
};

export const components: ComponentDefinition[] = [
  {
    name: 'button',
    path: path.join(__dirname, '../components/ui/button.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'An animated button component with hover effects and smooth transitions.',
  },
];
