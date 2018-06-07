export{ Quirk }

import Engeener from "../Engineer";

class Quirk
{
    private _MaxHealthPointsQuirk:number;
    private _HealthPointsQuirk:number;
    private _ActionPointsQuirk:number;
    private _DodgeQuirk:number;
    private _BleedResistanceQuirk:number;
    private _MentalResistanceQuirk:number;
    private _AstralResistanceQuirk:number;
    private _StunResistanceQuirk:number;
    private _MoveResistanceQuirk:number;
    private _AccuracyQuirk:number;   
    private _CriticalChanceQuirk:number;
    private _CriticalMultiplierQuirk:number;
    

    public get MaxHealthPointsQuirk():number{return this._MaxHealthPointsQuirk;}
    public set MaxHealthPointsQuirk(MaxHealthPointsQuirk:number){this._MaxHealthPointsQuirk = MaxHealthPointsQuirk;}
    public get HealthPointsQuirk():number{return this._HealthPointsQuirk;}
    public set HealthPointsQuirk(HealthPointsQuirk:number){this._HealthPointsQuirk = HealthPointsQuirk;}
    public get ActionPointsQuirk():number{return this._ActionPointsQuirk;}
    public set ActionPointsQuirk(ActionPointsQuirk:number){this._ActionPointsQuirk = ActionPointsQuirk;}
    public get DodgeQuirk():number{return this._DodgeQuirk;}
    public set DodgeQuirk(DodgeQuirk:number){this._DodgeQuirk = DodgeQuirk;}
    public get BleedResistanceQuirk():number{return this._BleedResistanceQuirk;}
    public set BleedResistanceQuirk(BleedResistanceQuirk:number){this._BleedResistanceQuirk = BleedResistanceQuirk;}
    public get MentalResistanceQuirk():number{return this._MentalResistanceQuirk;}
    public set MentalResistanceQuirk(MentalResistanceQuirk:number){this._MentalResistanceQuirk = MentalResistanceQuirk;}
    public get AstralResistanceQuirk():number{return this._AstralResistanceQuirk;}
    public set AstralResistanceQuirk(AstralResistanceQuirk:number){this._AstralResistanceQuirk = AstralResistanceQuirk;}
    public get StunResistanceQuirk():number{return this._StunResistanceQuirk;}
    public set StunResistanceQuirk(StunResistanceQuirk:number){this._StunResistanceQuirk = StunResistanceQuirk;}
    public get MoveResistanceQuirk():number{return this._MoveResistanceQuirk;}
    public set MoveResistanceQuirk(MoveResistanceQuirk:number){this._MoveResistanceQuirk = MoveResistanceQuirk;}
    public get AccuracyQuirk():number{return this._AccuracyQuirk;}
    public set AccuracyQuirk(AccuracyQuirk:number){this._AccuracyQuirk = AccuracyQuirk;}
    public get CriticalChanceQuirk():number{return this._CriticalChanceQuirk;}
    public set CriticalChanceQuirk(CriticalChanceQuirk:number){this._CriticalChanceQuirk = CriticalChanceQuirk;}
    public get CriticalMultiplierQuirk():number{return this._CriticalMultiplierQuirk;}
    public set CriticalMultiplierQuirk(CriticalMultiplierQuirk:number){this._CriticalMultiplierQuirk = CriticalMultiplierQuirk;}

    public constructor()
    {
        this._MaxHealthPointsQuirk = 0;
        this._HealthPointsQuirk = 0;
        this._ActionPointsQuirk = 0;
        this._DodgeQuirk = 0;
        this._BleedResistanceQuirk = 0;
        this._MentalResistanceQuirk = 0;
        this._AstralResistanceQuirk = 0;
        this._StunResistanceQuirk = 0;
        this._MoveResistanceQuirk = 0;
        this._AccuracyQuirk = 0;
        this._CriticalChanceQuirk = 0;
        this._CriticalMultiplierQuirk = 0;
    }


}