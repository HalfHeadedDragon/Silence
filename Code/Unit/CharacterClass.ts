export { CharacterClass };

import Engineer from "../Engineer";
import { Sprite } from "three";
import { GameScene } from "../GameScene";
import { Unit } from "./Unit";
import { Stats } from "../Mechanics/Stats";
import { Skill } from "../Mechanics/Skill";
import { Quirk } from "../Mechanics/Quirk";
import { Buffs } from "../Mechanics/Buffs";

class CharacterClass extends Unit
{
    public constructor(GameScene:GameScene, Quirks:Quirk[], Buffs:Buffs[])
    {
        super(Quirks, Buffs);
        
        this.RepeatX = 2;
        this.Sampling = Engineer.ImageObjectSamplingType.Nearest;
        this.Trans.Scale = new Engineer.Vertex(300,300,1);
        this.Trans.Translation = new Engineer.Vertex(this.Trans.Scale.X/2, 750, 2);
    }
  
}