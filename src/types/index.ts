export interface Project {
    id: number;
    title: {
      en: string;
      fr: string;
    };
    description: {
      en: string;
      fr: string;
    };
    image: string;
    tags: string[];
  }
  
  export interface Skill {
    name: string;
    icon: string;
    level: number;
  }
  