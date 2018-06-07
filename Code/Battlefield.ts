export {Battlefield}

import Engineer from "./Engineer";
import { Party } from "./Party";
import { GameScene } from "./GameScene";
import { Unit } from "./Unit/Unit";
import { Skill } from "./Mechanics/Skill";
import { Hud } from "./UI/Hud";


class Battlefield
{
    private _GameScene:GameScene;
    private _Party:Party[]=[];
    private _SelectedCaster:Unit;
    private _SelectedTarget:Unit;
    private _SelectedSkill:Skill;
    private _SkillCasted:boolean;
    private _Roll:number;
    private _Hud:Hud;
    
    public constructor(GameScene:GameScene, Party:Party[], Hud:Hud)
    {
        this._GameScene = GameScene;
        this._SkillCasted = false;
        this._Party = Party;
        this._SelectedCaster = Party[0].getMember(0);
        this._SelectedTarget = Party[1].getMember(0);
        this._SelectedSkill = this._SelectedCaster.getSkill(0);
        this._Hud = Hud;
        for(let i=0;i<Party[0].Characters.length;i++)this._Party[0].getMember(i).Events.MouseDown.push(this.Selected.bind(this)); 
        for(let i=0;i<Party[1].Characters.length;i++)this._Party[1].getMember(i).Events.MouseDown.push(this.Targeted.bind(this)); 
        for(let i=0;i<4;i++)this._Hud.HudSkills[i].Events.MouseDown.push(this.SelectedSkill.bind(this));
        this._GameScene.Events.KeyDown.push(this.KeyDown.bind(this));
        this._GameScene.Events.TimeTick.push(this.UpdateProjectile.bind(this));
    }

    public Selected(Game:Engineer.Game, Args:any) //Select character
    {
        this._SelectedCaster = Args.Sender;
        this._Hud.ChangeSkills(this._SelectedCaster.Skills);
        this._SelectedSkill = this._SelectedCaster.getSkill(0);
    }

    public SelectedSkill(Game:Engineer.Game, Args:any) //Select skill
    {
        this._SelectedSkill = this._SelectedCaster.getSkill(Args.Sender.SkillIndex);  
    }

    public Targeted(Game:Engineer.Game, Args:any) //Select target
    {
        this._SelectedTarget = Args.Sender;        
    }
 
    public KeyDown(Game:Engineer.Game, Args:any)
    {        
        if(Args.KeyCode == 32) //Space
        {            
            if(this._SelectedSkill.ActionPointsCost <= this._SelectedCaster.Stats.ActionPoints)
            {
                this._Roll = Math.floor(Math.random()*100);
                this._SelectedCaster.Stats.ActionPoints -= this._SelectedSkill.ActionPointsCost;
                this._SkillCasted = true;
                this._SelectedSkill.Sprite.Trans.Scale = new Engineer.Vertex(60,30,1);
                this._SelectedSkill.Sprite.Trans.Translation = new Engineer.Vertex(this._SelectedCaster.Trans.Translation.X, this._SelectedCaster.Trans.Translation.Y, 3);
                this._SelectedSkill.Sprite.Active = true;                
                this._GameScene.AddSceneObject(this._SelectedSkill.Sprite);
            }
        }
        if(Args.KeyCode == 81) //Q
        {
            this._SelectedSkill = this._SelectedCaster.getSkill(0);
        }
        if(Args.KeyCode == 87) //W
        {
            this._SelectedSkill = this._SelectedCaster.getSkill(1);
        }
        if(Args.KeyCode == 69) //E
        {
            this._SelectedSkill = this._SelectedCaster.getSkill(2);
        }
        if(Args.KeyCode == 82) //R
        {
            this._SelectedSkill = this._SelectedCaster.getSkill(3);
        }
    }

    public UpdateProjectile()
    {
        if(this._SkillCasted)
        {
            if(this._Roll<this._SelectedSkill.Accuracy)
            {
                this._SelectedSkill.Sprite.Trans.Translation = new Engineer.Vertex(this._SelectedSkill.Sprite.Trans.Translation.X+3, this._SelectedSkill.Sprite.Trans.Translation.Y, 3);                          
                if(this._SelectedSkill.Sprite.Trans.Translation.X >= this._SelectedTarget.Trans.Translation.X)
                {
                    this._SelectedTarget.Stats.HealthPoints -= this._SelectedSkill.CalculateDMG(this._SelectedTarget);
                    
                    if(this._SelectedTarget.Stats.HealthPoints <= 0)
                    {
                        this._SelectedTarget.Active = false;
                    }
                    this._SkillCasted = false;
                    this._SelectedSkill.Sprite.Active = false;
                }
            }
            else
            {
                this._SelectedSkill.Sprite.Trans.Translation = new Engineer.Vertex(this._SelectedSkill.Sprite.Trans.Translation.X+3, this._SelectedSkill.Sprite.Trans.Translation.Y - Math.round(Math.log(this._SelectedSkill.Sprite.Trans.Translation.X)), 3);                                
                if(this._SelectedSkill.Sprite.Trans.Translation.X >= this._SelectedTarget.Trans.Translation.X)
                {
                    this._SkillCasted = false;
                    this._SelectedSkill.Sprite.Active = false;
                }
            }
        }
    }
}