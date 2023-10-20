import sword from "../images/sword.jpg"
import boots from "../images/bottes.jpg"
import shield from "../images/bouclier.jpg"
import coat from "../images/cape.jpg"
import bandage from "../images/bandage.jpg"
import stick from "../images/stick.jpg"
import { PlayerCharacteristics } from "../characters/Player"




export type loot = PlayerCharacteristics & {
    category: string,
   
}

export const lootsList: loot[] =[
    {
    name: "épée",
    pv: 0,
    physDamages: 2,
    magDamages: 0,
    physResist: 0,
    magResist: 0,
    category: "normal",
    speed: 0,
    avatar: sword

},
    
    {
    name: "baton",
    pv: 0,
    physDamages: 0,
    magDamages: 2,
    physResist: 0,
    magResist: 0,
    category: "normal",
    speed: 0,
    avatar :stick
},
    {
    name: "cape",
    pv: 0,
    physDamages: 0,
    magDamages: 0,
    physResist: 0,
    magResist: 2,
    category: "normal",
    speed: 0,
    avatar: coat

},
    {
    name: "bouclier",
    pv: 0,
    physDamages: 0,
    magDamages: 0,
    physResist: 2,
    magResist: 0,
    category: "normal",
    speed: 0,
    avatar: shield

},
    {
    name: "bandage",
    pv: 5,
    physDamages: 0,
    magDamages: 0,
    physResist: 0,
    magResist: 0,
    category: "success",
    speed: 0,
    avatar: bandage

},
    {
    name: "bottes",
    pv: 0,
    physDamages: 0,
    magDamages: 0,
    physResist: 0,
    magResist: 0,
    category: "success",
    speed: 5,
    avatar: boots

},
]