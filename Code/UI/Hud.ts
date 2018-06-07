export { Hud };

import Engineer from "../Engineer";
import { GameScene } from "../GameScene";
import { HudSkill } from "./HudSkill";
import { Skill } from "../Mechanics/Skill";

class Hud extends Engineer.Tile
{ 
    private _GameScene:GameScene;
    private _HudSkills:HudSkill[]=[];

    public get HudSkills():HudSkill[]{return this._HudSkills;}
    public set HudSkills(HudSkills:HudSkill[]){this._HudSkills = HudSkills;}

    public constructor(GameScene:GameScene)
    {
        super();
        this._GameScene = GameScene;
        this.Collection.Images.push("Resources/Textures/Hud.png");
        this.Name = "Hud";
        this.Index = 0;
        this.Fixed = true;
        this.Trans.Scale = new Engineer.Vertex(1920, 200, 1);
        this.Trans.Translation = new Engineer.Vertex(960, 980, 4);
        for(let i=0;i<4;i++)
        {
        this._HudSkills[i] = new HudSkill(this._GameScene);
        this._HudSkills[i].Trans.Scale = new Engineer.Vertex(150, 150, 4.1);
        this._HudSkills[i].Trans.Translation = new Engineer.Vertex(96+192*i, 980, 4.1);
        //this._GameScene.AddSceneObject(this._HudSkills[i]);
        this._HudSkills[i].SkillIndex = i;
        }
        //this._GameScene.AddSceneObject(this);
    }
    public ChangeSkills(Skill:Skill[])
    {
        for(let i=0;i<Skill.length;i++)
        {
            this._HudSkills[i].ChangeTile(Skill[i].Sprite.Name);
        }
    }
}