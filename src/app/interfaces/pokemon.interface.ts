export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface Item {
  name: string;
  url: string;
}

interface VersionDetail {
  rarity: number;
  version: {
    name: string;
    url: string;
  };
}

interface HeldItem {
  item: Item;
  version_details: VersionDetail[];
}

interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export default interface  Pokemon {
    abilities?: Ability[];
    base_experience?: number;
    forms?: {
    }[];
    game_indices?: {
    }[];
    height?: number;
    held_items?: HeldItem[];
    id: number;
    is_default?: boolean;
    location_area_encounters?: string;
    moves?: {
    }[];
    name?: string;
    order?: number;
    past_abilities?: any[];
    past_types?: any[]; 
    species?: {
      name: string;
      url: string;
    };
    sprites?: {
      back_default: string;
      back_female?: string | null;
      back_shiny?: string;
      back_shiny_female?: string | null;
      front_default?: string;
    };
    stats?: {
    }[];
    types?: Type[];
    weight?: number;
  }