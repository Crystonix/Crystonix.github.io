export const homeHero = {
  eyebrow: 'Projects · Experiments · Visuals',
  title: 'Crystonix',
  lead: 'Projects, experiments, and visual work I’ve made while exploring web development, games, and interactive media.',
};

export const heroProjectIds = [
  'game-art-visuals',
  'underwater-threejs-scene',
  'godot-dungeon-generation',
  'animation-legal-trap',
] as const;

export const focusAreas = [
  {
    title: 'Web Projects',
    description: 'Interfaces, tools, and small platforms built for the browser.',
  },
  {
    title: 'Game Systems',
    description: 'Godot projects, procedural generation, plugins, and gameplay tools.',
  },
  {
    title: 'Visual Work',
    description: 'Game art, animation, 3D scenes, and motion experiments.',
  },
] as const;

export const projectCategories = ['Web Projects', 'Game Systems', 'Visual Work'] as const;
