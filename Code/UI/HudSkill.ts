export { HudSkill };

import Engineer from "../Engineer";
import { GameScene } from "../GameScene";

class HudSkill extends Engineer.Tile
{ 
    private _GameScene:GameScene;
    private _SkillIndex:number;

    public get SkillIndex():number {return this._SkillIndex;}
    public set SkillIndex(SkillIndex:number) {this._SkillIndex = SkillIndex;}

    public constructor(GameScene:GameScene)
    {
        super();
        this._GameScene = GameScene;
        this.addSkill("PlaceHolder");
        this.addSkill("CannonBlast");
        this.addSkill("NeuralBomb");
        this.Index = 0;
        this.Name = "HudSkill";
        this.Fixed = true;     
        this._SkillIndex = -1;   
    }

    public addSkill(SkillName:string)
    {
        this.Collection.Images.push("Resources/Textures/SkillTiles/"+SkillName+".png");
    }

    public ChangeTile(SkillName:string)
    {
        switch(SkillName)
        {
        case "PlaceHolder":{this.Index = 0;break;}
        case "CannonBlast":{this.Index = 1;break;}
        case "NeuralBomb":{this.Index = 2;break;}
        default: this.Index = 0;
        }
        this.Modified = true;
    }
}