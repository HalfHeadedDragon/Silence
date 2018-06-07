export { ProtectorClass };

import Engineer from "../Engineer";
import { Sprite } from "three";
import { GameScene } from "../GameScene";
import { Stats } from "../Mechanics/Stats";
import { Skill } from "../Mechanics/Skill";
import { Quirk } from "../Mechanics/Quirk";
import { Buffs } from "../Mechanics/Buffs";
import { CharacterClass } from "./CharacterClass";
import { CannonBlast } from "../Mechanics/AllSkills/CannonBlast";
import { NeuralBomb } from "../Mechanics/AllSkills/NeuralBomb";

class ProtectorClass extends CharacterClass
{
    public constructor(GameScene:GameScene, Quirks:Quirk[], Buffs:Buffs[])
    {
        super(GameScene, Quirks, Buffs);
        this.Name = "ProtectorClass";
        this.LoadSets();
        this.LoadSkills();
        this.SetStats();
    }

    public SetStats()
    {
        this._Stats.ActionPoints = 100;
        this._Stats.AstralResistance = 10;
        this._Stats.BleedResistance = 20;
        this._Stats.Dodge = 20;
        this._Stats.HealthPoints = 100;
        this._Stats.MaxHealthPoints = 100;
        this._Stats.PhysicalResistance = 0;
        this._Stats.FireResistance = 0;
        this._Stats.ColdResistance = 0;
        this._Stats.LightningResistance = 0;
        this._Stats.AstralResistance = 0;
        this._Stats.MentalResistance = 0;
        this._Stats.MoveResistance = 0;
        this._Stats.StunResistance = 0;       
    }

    private LoadSets() : void
    {
        let SpriteSetSkin = new Engineer.SpriteSet(null, "WalkRight", []);
        SpriteSetSkin.Seed = 10;
        for(let i = 0; i < 1; i++) SpriteSetSkin.Sprites.push("Resources/Textures/Characters/Protector/Image_0_"+i+".png");
        this.SpriteSets.push(SpriteSetSkin);
    }

    private LoadSkills():void
    {
        this.Skills.push(new CannonBlast(this), new NeuralBomb(this), new NeuralBomb(this), new CannonBlast(this));
    }
}