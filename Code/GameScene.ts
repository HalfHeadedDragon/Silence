export { GameScene };

import Engineer from "./Engineer";
import { CharacterClass } from "./Unit/CharacterClass";
import { Stats } from "./Mechanics/Stats";
import { Skill } from "./Mechanics/Skill";
import { Quirk } from "./Mechanics/Quirk";
import { Buffs } from "./Mechanics/Buffs";
import { Movement } from "./Movement";
import { Party } from "./Party";
import { SniperClass } from "./Unit/SniperClass";
import { EngineerClass } from "./Unit/EngineerClass";
import { ProtectorClass } from "./Unit/ProtectorClass";
import { CommandoClass } from "./Unit/CommandoClass";
import { Battlefield } from "./Battlefield";
import { Hud } from "./UI/Hud";
import { Unit } from "./Unit/Unit";

class GameScene extends Engineer.Scene2D
{
    private _Pause:boolean;
    private _Stats:Stats;
    private _Skill:Skill[];
    private _Quirk:Quirk[];
    private _Buffs:Buffs[][] = [];    
    private _Party:Party[]=[];
    private _Battlefield:Battlefield;
    private _Hud:Hud;
    private _Back1:Engineer.Tile;
    private _Movement:Movement;
    public get Pause():boolean { return this._Pause; }
    public set Pause(value:boolean) { this._Pause = value; }
    public constructor()
    {
        super();
        this.Name = "Game";
        this.Init();
    }
    public Init(): void
    {        
        this.GenerateBackground();       
        this._Skill = [new Skill()];
        this._Quirk = [new Quirk()];
        for(let i=0;i<10;i++)this._Buffs[i] = [new Buffs(), new Buffs()];

        this._Hud = new Hud(this);

        let Units0:Unit[]=[];
        Units0[0] = new SniperClass(this, this._Quirk, this._Buffs[0]);
        Units0[1] = new EngineerClass(this, this._Quirk, this._Buffs[1]);
        Units0[2] = new CommandoClass(this, this._Quirk, this._Buffs[2]);
        Units0[3] = new ProtectorClass(this, this._Quirk, this._Buffs[3]);

        let Units1:Unit[]=[];
        Units1[0] = new CommandoClass(this, this._Quirk, this._Buffs[6]);
        Units1[1] = new CommandoClass(this, this._Quirk, this._Buffs[7]);
        Units1[2] = new CommandoClass(this, this._Quirk, this._Buffs[8]);
        Units1[3] = new CommandoClass(this, this._Quirk, this._Buffs[9]);

        Units0[0].Buff[0].MentalDamageBuff = 50;
        Units1[0].Buff[0].PhysicalResistanceBuff = 100;
        Units1[0].Buff[1].MentalResistanceBuff = 100;
        
        console.log(Units0);
        console.log(Units1);       

        this._Movement = new Movement(this);

        this._Party[0] = new Party(this, Units0, 0);
        this._Party[1] = new Party(this, Units1, 1);
        
        this._Battlefield = new Battlefield(this, this._Party, this._Hud);
        
    }
    public SceneLoaded(DataString)
    {
        let Data = JSON.parse(DataString);
        if(Data.Type == "Scene") this.Deserialize(Data.Data);
    }
    private KeyPress(G: any, Args: any): void
    {
        if(this._Pause) return;
        // Key Code here
    }
    private SceneUpdate() : void
    {
        if(this._Pause) return;
        // Update Code here
    }
    private GenerateBackground() : void
    {
        let Backs:Engineer.TileCollection = new Engineer.TileCollection(null, ["Resources/Textures/back.png"]);
        let Back:Engineer.Tile = new Engineer.Tile();
        Back.Sampling = Engineer.ImageObjectSamplingType.Nearest;
        Back.Name = "Back";
        Back.Collection = Backs;
        Back.Index = 0;
        Back.Trans.Scale = new Engineer.Vertex(1920, 1080, 1);
        Back.Trans.Translation = new Engineer.Vertex(960, 540, 0);
        this._Back1 = Back;      
        this.AddSceneObject(this._Back1);       
    }
}