export { CannonBlast }

import Engineer from "../../Engineer";
import {Skill} from "../Skill";
import { Unit } from "../../Unit/Unit";

class CannonBlast extends Skill
{
    public constructor(Caster:Unit)
    {
        super();
        this.PhysicalDamage = 10;
        this.LightningDamage = 10;
        this.Accuracy = 90;
        this.ActionPointsCost = 25;
        this.CriticalChance = 2;
        this.CriticalMultiplier = 2;
        this.StunChance = 0;
        this.BleedChance = 0;
        this.PoisonChance = 0;
        this._Caster = Caster;
        this.LoadSets();
        this.TargetPositions = [0,1,2,3,4,5,6,7];
    }

    private LoadSets() : void
    {
        this.Sprite.Name = "CannonBlast";
        if(this._Caster.Side)
        {
            let SpriteSetSkin = new Engineer.SpriteSet(null, "CannonBlastRight", []);
            SpriteSetSkin.Seed = 10;
            for(let i = 1; i < 3; i++) SpriteSetSkin.Sprites.push("Resources/Textures/Skills/CannonBlast/fbl"+i+".png");
            this._Sprite.SpriteSets.push(SpriteSetSkin);
        }
        else
        {
            let SpriteSetSkin = new Engineer.SpriteSet(null, "CannonBlastLeft", []);
            SpriteSetSkin.Seed = 10;
            for(let i = 1; i < 3; i++) SpriteSetSkin.Sprites.push("Resources/Textures/Skills/CannonBlast/fbr"+i+".png");
            this._Sprite.SpriteSets.push(SpriteSetSkin);
        }
    }
}