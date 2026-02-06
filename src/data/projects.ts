export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  screenshots?: string[];
  tools: string[];
  role: string;
  teamSize?: string;
  videoUrl?: string; // YouTube embed URL or similar
  responsibilities?: string[];
  category: "professional" | "solo" | "team";
}

export const projects: Project[] = [
  // Professional Projects
  {
    id: "HVAC-Associate",
    title: "HVAC Associate",
    description:
      "This is the first project from my studio, developed using Unreal Engine Blueprints, with primary emphasis on core gameplay mechanics and responsive player controls.",
    image: "img/HVAC Associate/HVACAssociate.jpg",
    screenshots: [
      "img/HVAC Associate/473398258_635622448981248_3438246790668467954_n.webp",
      "https://drive.google.com/file/d/1-GfPxzt-yAiX-fORyzGAO8kfEWasOwLV/view?usp=drive_link",
      "https://drive.google.com/file/d/1-KZSwhEmu1PLMJa4PyJCxaZK8NAW5Pml/view?usp=drive_link",
      "https://drive.google.com/file/d/1lXIq8Jh5dDYA4rkDZ9bApOJ4EuxxFRwr/view?usp=drive_link",
    ],
    tools: ["Unreal Engine", "Blueprints", "C++"],
    role: "Unreal Developer",
    category: "professional",
    videoUrl: "https://www.youtube.com/embed/M_NHv_1bnC0", 
    responsibilities: [
      "Gameplay Blueprint Logic",
      "Interaction System",
      "UI Integration",
      "Optimization & Bug Fixing",
    ],
  },

  {
    id: "EV-Battery-Assembly-&-Packaging-Technician",
    title: "EV Battery Assembly & Packaging Technician",
    description:
      "This is the second project developed at my studio using Unreal Engine Blueprints, emphasizing core gameplay mechanics and responsive player controllers, built collaboratively with a programming lead and a 3D artist. ",
    image: "https://drive.google.com/file/d/1qW3HdloJEc7KivNjmlzUi0XbonTVL19u/view?usp=drive_link",
    screenshots: [
      "https://drive.google.com/file/d/1_eb7M5okyl8QBihDg7DuAkT4Vjep8_2q/view?usp=drive_link",
      "https://drive.google.com/file/d/1UlWYGeHxyt3OsL8JrBgHDUy47zZSEPiq/view?usp=drive_link",
      "https://drive.google.com/file/d/1Fg9-otF06zPgmMifsJOmVFJv0S2ypkWc/view?usp=drive_link",
    ],
    tools: ["Unreal Engine", "Blueprints", "C++"],
    role: "Gameplay Programmer",
    category: "professional",
    videoUrl: "https://www.youtube.com/watch?v=tFYEy_wKbso&t=1s",
    responsibilities: [
      "Gameplay Blueprint Logic",
      "Interaction System",
      "UI Integration",
      "Optimization & Bug Fixing",
    ],
  },
  {
    id: "EV-Technician",
    title: "EV Technician",
    description:
      "This is the second project developed at my studio using Unreal Engine Blueprints, emphasizing core gameplay mechanics and responsive player controllers, built collaboratively with a programming lead and a 3D artist. ",
    image: "https://drive.google.com/file/d/13l6QTLrTKfX9V2bFA1lOv36yCXudjnQj/view?usp=drive_link",
    screenshots: [
      "https://drive.google.com/file/d/1rE0T28YAsFd-E6VRpe-FDvkRgS5HNual/view?usp=drive_link",
      "https://drive.google.com/file/d/1o1cDX_2CqLYRlCzC5-_6nrr615CF165Z/view?usp=drive_link",
      "https://drive.google.com/file/d/1dplPeCKEMvY1rjeqHDGWkh-2Wpy5NIpg/view?usp=drive_link",
      "https://drive.google.com/file/d/1lV-nAr8Q4wy_vqQxJzfC8SFe4ykk-FPT/view?usp=drive_link",
    ],
    tools: ["Unreal Engine", "Blueprints", "C++"],
    role: "Lead Programmer",
    category: "professional",
    videoUrl: "https://www.youtube.com/watch?v=BSBgSgSE2dU&t=11s",
    responsibilities: [
      "Managed the complete programming side of the project.",
      "Gameplay Blueprint Logic",
      "Interaction System",
      "UI Integration",
      "Optimization & Bug Fixing",
    ],
  },
  {
    id: "HEV-Technician",
    title: "HEV Technician",
    description:
      "This is the second project developed at my studio using Unreal Engine Blueprints, emphasizing core gameplay mechanics and responsive player controllers, built collaboratively with a programming lead and a 3D artist. ",
    image: "https://drive.google.com/file/d/183xW6d4rrRufxYAgB6E1TaZrqfGO6aVK/view?usp=drive_link",
    screenshots: [
      "https://drive.google.com/file/d/1jonPmcPY6ATByBEL3q8gV2ZTrS2sVCu6/view?usp=drive_link",
      "https://drive.google.com/file/d/1ezBYivlh_U_kfPIWWb8ROlAfCjTA6v4v/view?usp=drive_link",
      "https://drive.google.com/file/d/13DyYeWXRiIX0N8IADReMcKl67jvoYX51/view?usp=drive_link",
      "https://drive.google.com/file/d/13FVV9IdQrc3ytEX5Q2tuEKhMJsGRhkDK/view?usp=drive_link",
    ],
    tools: ["Unreal Engine", "Blueprints", "C++"],
    role: "Lead Programmer",
    category: "professional",
    videoUrl: "https://www.youtube.com/watch?v=3u7LRdQv_40&t=1s",
    responsibilities: [
      "Managed the complete programming side of the project.",
      "Gameplay Blueprint Logic",
      "Interaction System",
      "UI Integration",
      "Optimization & Bug Fixing",
    ],
  },

  // Solo Projects
  {
    id: "dungeon-crawler-prototype",
    title: "Dungeon Crawler Prototype",
    description:
      "A roguelike dungeon crawler with procedural generation and action-based combat.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800",
    screenshots: [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800",
    ],
    tools: ["Unreal Engine", "Blueprints"],
    role: "Solo Developer",
    category: "solo",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    responsibilities: [
      "Gameplay Blueprint Logic",
      "Interaction System",
      "UI Integration",
      "Optimization & Bug Fixing",
    ],
  },
  {
    id: "platformer-adventure",
    title: "Platformer Adventure",
    description:
      "A 2D platformer with tight controls, challenging levels, and unique art direction.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
    screenshots: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
    ],
    tools: ["Unity", "C#", "2D"],
    role: "Game Designer / Developer",
    category: "solo",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    responsibilities: [
      "Gameplay Blueprint Logic",
      "Interaction System",
      "UI Integration",
      "Optimization & Bug Fixing",
    ],
  },

  // Team Projects
  {
    id: "game-jam-survival",
    title: "Game Jam Entry - Survival",
    description:
      "A survival game created in 48 hours with a team of 4 developers and artists.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800",
    screenshots: [
      "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800",
      "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800",
      "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800",
    ],
    tools: ["Unity", "C#", "Affinity"],
    role: "Game Designer",
    teamSize: "3",
    category: "team",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    responsibilities: [
      "Gameplay Blueprint Logic",
      "Interaction System",
      "UI Integration",
      "Optimization & Bug Fixing",
    ],
  },
];
