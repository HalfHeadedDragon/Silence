export {NeuralBomb}

import Engineer from "../../Engineer";
import {Skill} from "../Skill";
import { Unit } from "../../Unit/Unit";

class NeuralBomb extends Skill
{
    public constructor(Caster:Unit)
    {
        super();
        this.MentalDamage = 7;        
        this.Accuracy = 90;
        this.ActionPointsCost = 25;
        this.CriticalChance = 20;
        this.CriticalMultiplier = 3;
        this.StunChance = 0;
        this.BleedChance = 0;
        this.PoisonChance = 0;
        this._Caster = Caster;
        this.LoadSets();
        this.TargetPositions = [0,1,2,3,4,5,6,7];
    }

    private LoadSets() : void
    {
        this.Sprite.Name = "NeuralBomb";
        if(this._Caster.Side)
        {
            let SpriteSetSkin = new Engineer.SpriteSet(null, "NeuralBombRight", []);
            SpriteSetSkin.Seed = 10;
            for(let i = 1; i < 3; i++) SpriteSetSkin.Sprites.push("Resources/SpriteSets/Skills/NeuralBomb/wl"+i+".png");
            this._Sprite.SpriteSets.push(SpriteSetSkin);
        }
        else
        {
            let SpriteSetSkin = new Engineer.SpriteSet(null, "NeuralBombLeft", []);
            SpriteSetSkin.Seed = 10;
            for(let i = 1; i < 3; i++) SpriteSetSkin.Sprites.push("Resources/SpriteSets/Skills/NeuralBomb/wr"+i+".png");
            this._Sprite.SpriteSets.push(SpriteSetSkin);
        }
    }
}