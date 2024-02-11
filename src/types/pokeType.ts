export type pokeType = {
  id: string;
  front_img: string;
  pokeTypes: [{ name: string; url: string }];
  abilities: [{ is_hidden: boolean; ability: { name: string; url: string } }];
  generation?: string;
  stats: [{ base_stat: number; stat: { name: string } }];
};

export type extraDataPoke = {
  url: string;
  generation: string;
  habitat: string;
  evolution_chain: string;
  egg_group: [{ name: string; url: string }];
  name: string;
};

export type evolutionType = {
  evolves_to: [
    {
      species: { name: string };
      evolution_details: Details;
      evolves_to: [
        {
          species: { name: string };
          evolution_details: Details;
        }
      ];
    }
  ];
  species: {
    name: string;
  };
};

export type Details = [
  {
    gender: string | null;
    held_item: string | null;
    item: string | null;
    known_move: string | null;
    known_move_type: string | null;
    location: string | null;
    min_affection: number | null;
    min_beauty: number | null;
    min_happiness: number | null;
    min_level: number | null;
    needs_overworld_rain: boolean;
    relative_physical_stats: number | null;
    time_of_day: string | null;
    trade_species: string | null;
    turn_upside_down: boolean;
  }
];
