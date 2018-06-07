export { Unit };

import Engineer from "../Engineer";
import { Stats } from "../Mechanics/Stats";
import { Skill } from "../Mechanics/Skill";
import { Quirk } from "../Mechanics/Quirk";
import { Buffs } from "../Mechanics/Buffs";
import { Status } from "../Mechanics/Status";


class Unit extends Engineer.Sprite
{
protected _Stats:Stats;
protected _Skills:Skill[]=[];
protected _Quirks:Quirk[]=[];
protected _Buffs:Buffs[]=[];
protected _Status:Status;
protected _Position:number;
protected _Size:number;
protected _Side:number; //left side 0, right side 1
protected _Selected:boolean;

public get Stats():Stats{return this._Stats;}
public set Stats(Stats:Stats){this._Stats = Stats;} 
public get Skills():Skill[]{return this._Skills;}
public set Skills(Skills:Skill[]){this._Skills = Skills;} 
public get Quirk():Quirk[]{return this._Quirks;}
public set Quirk(Quirk:Quirk[]){this._Quirks = Quirk;}  
public get Buff():Buffs[]{return this._Buffs;}
public set Buff(Buffs:Buffs[]){this._Buffs = Buffs;} 
public get Status():Status{return this._Status;}
public set Status(Status:Status){this._Status = Status;}
public get Position():number{return this._Position;}
public set Position(Position:number){this._Position = Position;}
public get Size():number{return this._Size;}
public set Size(Size:number){this._Size = Size;} 
public get Side():number{return this._Side;}
public set Side(Side:number){this._Side = Side;} 

    public constructor(Quirks:Quirk[], Buffs:Buffs[])
    {
        super();
        this._Quirks = Quirks;
        this._Buffs = Buffs;
        this._Stats = new Stats();
        this._Status = new Status();
        this._Size = 1;
        this._Selected = false;
    }

    public getSkill(Position:number):Skill
    {
        return this._Skills[Position];
    }
}