
import gobelin from "../images/gobelin.jpg"
import slime from "../images/slime.jpg"
import tresorGobelin from "../images/tresorGobelin.jpg"
import fairy from "../images/fee.jpg"
import orc from "../images/orc.jpg"
import skeleton from "../images/squelette.jpg"
import ogre from "../images/ogre.jpg"
import fantom from "../images/fantome.jpg"
import necromancer from "../images/nécromancien.jpeg"
import troll from "../images/troll.jpg"


export type Character = {
  name: string;
  pv: number;
  physDamages: number;
  magDamages: number;
  speed: number;
  avatar: string
}

export type Monster = Character &  {
  category: string;
  physResist: "immune" | "none";
  magResist: "immune" | "none";
}

export const monstersList: Monster[] = [
    {
      name: "Gobelin",
      pv: 40,
   
      physDamages: 5,
      magDamages: 0,
      physResist: "none",
      magResist: "immune",
      category: "partialSuccess",
      speed: 5,
      avatar:gobelin,

    },
    {
      name: "Slime",
      pv: 40,
      physDamages: 0,
      magDamages: 5,
      physResist: "immune",
      magResist: "none",
      category: "partialSuccess",
      speed: 5,
      avatar: slime,
    },
    {
      name: "Trésorier gobelin",
      pv: 80,
      physDamages: 10,
      magDamages: 0,
      physResist: "none",
      magResist: "immune",
      category: "success",
      speed: 5,
      avatar: tresorGobelin
    },
    {
      name: "Fée",
      pv: 80,
      physDamages: 0,
      magDamages: 10,
      physResist: "immune",
      magResist: "none",
      category: "success",
      speed: 5,
      avatar: fairy
    },
    {
      name: "Orc",
      pv: 40,
      physDamages: 5,
      magDamages: 0,
      physResist: "none",
      magResist: "immune",
      category: "partialFailure",
      speed: 10,
      avatar: orc
    },
    {
      name: "Squelette",
      pv: 40,
      physDamages: 0,
      magDamages: 5,
      physResist: "immune",
      magResist: "none",
      category: "partialFailure",
      speed: 10,
      avatar: skeleton
    },
    {
      name: "Ogre",
      pv: 80,
      physDamages: 10,
      magDamages: 0,
      physResist: "none",
      magResist: "immune",
      category: "failure",
      speed: 15,
      avatar: ogre
    },
    {
      name: "Fantôme",
      pv: 80,
      physDamages: 0,
      magDamages: 10,
      physResist: "immune",
      magResist: "none",
      category: "failure",
      speed: 15,
      avatar: fantom
    },
    {
      name: "Necromancien",
      pv: 100,
      physDamages: 0,
      magDamages: 20,
      physResist: "immune",
      magResist: "none",
      category: "boss",
      speed: 20,
      avatar:necromancer
    },
    {
      name: "Troll",
      pv: 100,
      physDamages: 20,
      magDamages: 0,
      physResist: "none",
      magResist: "immune",
      category: "failure",
      speed: 20,
      avatar: troll
    },
  ];
  