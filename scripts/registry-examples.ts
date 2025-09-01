import path from 'path';

type ExampleDefinition = {
  name: string;
  path: string;
  description: string;
  componentName: string;
  dependencies?: string[];
  files?: {
    name: string;
    path: string;
    type?: 'registry:hook' | 'registry:ui' | 'registry:lib';
  }[];
};

export const examples: ExampleDefinition[] = [
  {
    name: 'button-basic',
    path: path.join(__dirname, '../app/docs/button/Button.tsx'),
    description:
      'Basic implementation of the button component with hover animations.',
    componentName: 'button-basic',
    files: [
      {
        name: 'button.tsx',
        path: path.join(__dirname, '../components/ui/button.tsx'),
        type: 'registry:ui',
      },
    ],
  },
];
