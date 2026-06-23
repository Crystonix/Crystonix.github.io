import type { CollectionEntry } from 'astro:content';
import { projectCategories } from '../data/projectCategories';

type Project = CollectionEntry<'projects'>;

type HeroReelItem = {
  title: string;
  label: string;
  href: string;
  cover: NonNullable<Project['data']['cover']>;
};

export const sortProjects = (projects: Project[]) =>
  [...projects].sort((a, b) => a.data.order - b.data.order);

export const getFeaturedProjects = (projects: Project[]) =>
  projects.filter((project) => project.data.featured);

export const getHeroReelItems = (
  projects: Project[],
  projectIds: readonly string[],
): HeroReelItem[] => {
  return projectIds.flatMap((id) => {
    const project = projects.find((entry) => entry.id === id);
    const cover = project?.data.heroCover ?? project?.data.cover;

    if (!project || !cover) return [];

    return {
      title: project.data.title,
      label: project.data.category,
      href: `/projects/${project.id}/`,
      cover,
    };
  });
};

export const groupProjectsByCategory = (projects: Project[]) =>
  projectCategories
    .map((category) => ({
      category,
      projects: projects.filter(
        (project) => project.data.category === category,
      ),
    }))
    .filter((group) => group.projects.length > 0);
