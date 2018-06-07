export{ Stats }

import Engeener from "../Engineer";

class Stats
{
    private _MaxHealthPoints:number;
    private _HealthPoints:number;
    private _ActionPoints:number;
    private _Dodge:number;
    private _BleedResistance:number;
    private _PhysicalResistance:number;
    private _FireResistance:number;
    private _ColdResistance:number;
    private _LightningResistance:number;
    private _AstralResistance:number;
    private _MentalResistance:number;
    private _StunResistance:number;
    private _MoveResistance:number;    
    
    public get MaxHealthPoints():number{return this._MaxHealthPoints;}
    public set MaxHealthPoints(MaxHealthPoints:number){this._MaxHealthPoints = MaxHealthPoints;}
    public get HealthPoints():number{return this._HealthPoints;}
    public set HealthPoints(HealthPoints:number){this._HealthPoints = HealthPoints;}
    public get ActionPoints():number{return this._ActionPoints;}
    public set ActionPoints(ActionPoints:number){this._ActionPoints = ActionPoints;}
    public get Dodge():number{return this._Dodge;}
    public set Dodge(Dodge:number){this._Dodge = Dodge;}
    public get BleedResistance():number{return this._BleedResistance;}
    public set BleedResistance(BleedResistance:number){this._BleedResistance = BleedResistance;}
    public get PhysicalResistance():number{return this._PhysicalResistance;}
    public set PhysicalResistance(PhysicalResistance:number){this._PhysicalResistance = PhysicalResistance;}
    public get FireResistance():number{return this._FireResistance;}
    public set FireResistance(FireResistance:number){this._FireResistance = FireResistance;}
    public get ColdResistance():number{return this._ColdResistance;}
    public set ColdResistance(ColdResistance:number){this._ColdResistance = ColdResistance;}
    public get LightningResistance():number{return this._LightningResistance;}
    public set LightningResistance(LightningResistance:number){this._LightningResistance = LightningResistance;}
    public get MentalResistance():number{return this._MentalResistance;}
    public set MentalResistance(MentalResistance:number){this._MentalResistance = MentalResistance;}
    public get AstralResistance():number{return this._AstralResistance;}
    public set AstralResistance(AstralResistance:number){this._AstralResistance = AstralResistance;}
    public get StunResistance():number{return this._StunResistance;}
    public set StunResistance(StunResistance:number){this._StunResistance = StunResistance;}
    public get MoveResistance():number{return this._MoveResistance;}
    public set MoveResistance(MoveResistance:number){this._MoveResistance = MoveResistance;}
    
    
    public constructor()
    {
        this._MaxHealthPoints = 100;
        this._HealthPoints = 100;
        this._ActionPoints = 100;
        this._Dodge = 10;
        this._BleedResistance = 30;
        this._PhysicalResistance = 0;
        this._FireResistance = 0;
        this._ColdResistance = 0;
        this._LightningResistance = 0;
        this._MentalResistance = 0;
        this._AstralResistance = 0;
        this._StunResistance = 20;
        this._MoveResistance = 20;
    }
}