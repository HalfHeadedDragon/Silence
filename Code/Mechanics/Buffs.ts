export{ Buffs }

import Engeener from "../Engineer";

class Buffs
{
    private _MaxHealthPointsBuff:number;
    private _HealthPointsBuff:number;
    private _ActionPointsBuff:number;
    private _DodgeBuff:number;
    private _PhysicalDamageBuff:number;
    private _FireDamageBuff:number;
    private _ColdDamageBuff:number;
    private _LightningDamageBuff:number;
    private _AstralDamageBuff:number;
    private _MentalDamageBuff:number;
    private _BleedChanceBuff:number;
    private _BleedResistanceBuff:number;
    private _PoisonChanceBuff:number;
    private _PoisonResistanceBuff:number;
    private _PhysicalResistanceBuff:number;
    private _FireResistanceBuff:number;
    private _ColdResistanceBuff:number;
    private _LightningResistanceBuff:number;
    private _MentalResistanceBuff:number;
    private _AstralResistanceBuff:number;
    private _StunResistanceBuff:number;
    private _MoveResistanceBuff:number;
    private _AccuracyBuff:number;
    private _CriticalChanceBuff:number;
    private _CriticalMultiplierBuff:number;
    private _StunChanceBuff:number;
    private _BuffDuration:number;
    
    public get MaxHealthPointsBuff():number{return this._MaxHealthPointsBuff;}
    public set MaxHealthPointsBuff(MaxHealthPointsBuff:number){this._MaxHealthPointsBuff = MaxHealthPointsBuff;}
    public get HealthPointsBuff():number{return this._HealthPointsBuff;}
    public set HealthPointsBuff(HealthPointsBuff:number){this._HealthPointsBuff = HealthPointsBuff;}
    public get ActionPointsBuff():number{return this._ActionPointsBuff;}
    public set ActionPointsBuff(ActionPointsBuff:number){this._ActionPointsBuff = ActionPointsBuff;}
    public get DodgeBuff():number{return this._DodgeBuff;}
    public set DodgeBuff(DodgeBuff:number){this._DodgeBuff = DodgeBuff;}
    public get BleedChanceBuff():number{return this._BleedChanceBuff;}
    public set BleedChanceBuff(BleedChanceBuff:number){this._BleedChanceBuff = BleedChanceBuff;}
    public get BleedResistanceBuff():number{return this._BleedResistanceBuff;}
    public set BleedResistanceBuff(BleedResistanceBuff:number){this._BleedResistanceBuff = BleedResistanceBuff;}
    public get PoisonChanceBuff():number{return this._PoisonChanceBuff;}
    public set PoisonChanceBuff(PoisonChanceBuff:number){this._PoisonChanceBuff = PoisonChanceBuff;}
    public get PoisonResistanceBuff():number{return this._PoisonResistanceBuff;}
    public set PoisonResistanceBuff(PoisonResistanceBuff:number){this._PoisonResistanceBuff = PoisonResistanceBuff;}
    public get PhysicalDamageBuff():number{return this._PhysicalDamageBuff;}
    public set PhysicalDamageBuff(PhysicalDamageBuff:number){this._PhysicalDamageBuff = PhysicalDamageBuff;}   
    public get FireDamageBuff():number{return this._FireDamageBuff;}
    public set FireDamageBuff(FireDamageBuff:number){this._FireDamageBuff = FireDamageBuff;}    
    public get ColdDamageBuff():number{return this._ColdDamageBuff;}
    public set ColdDamageBuff(ColdDamageBuff:number){this._ColdDamageBuff = ColdDamageBuff;}    
    public get LightningDamageBuff():number{return this._LightningDamageBuff;}
    public set LightningDamageBuff(LightningDamageBuff:number){this._LightningDamageBuff = LightningDamageBuff;}     
    public get MentalDamageBuff():number{return this._MentalDamageBuff;}
    public set MentalDamageBuff(MentalDamageBuff:number){this._MentalDamageBuff = MentalDamageBuff;}   
    public get PhysicalResistanceBuff():number{return this._PhysicalResistanceBuff;}
    public set PhysicalResistanceBuff(PhysicalResistanceBuff:number){this._PhysicalResistanceBuff = PhysicalResistanceBuff;}   
    public get FireResistanceBuff():number{return this._FireResistanceBuff;}
    public set FireResistanceBuff(FireResistanceBuff:number){this._FireResistanceBuff = FireResistanceBuff;}   
    public get ColdResistanceBuff():number{return this._ColdResistanceBuff;}
    public set ColdResistanceBuff(ColdResistanceBuff:number){this._ColdResistanceBuff = ColdResistanceBuff;}   
    public get LightningResistanceBuff():number{return this._LightningResistanceBuff;}
    public set LightningResistanceBuff(LightningResistanceBuff:number){this._LightningResistanceBuff = LightningResistanceBuff;}   
    public get AstralDamageBuff():number{return this._AstralDamageBuff;}
    public set AstralDamageBuff(AstralDamageBuff:number){this._AstralDamageBuff = AstralDamageBuff;} 
    public get MentalResistanceBuff():number{return this._MentalResistanceBuff;}
    public set MentalResistanceBuff(MentalResistanceBuff:number){this._MentalResistanceBuff = MentalResistanceBuff;}
    public get AstralResistanceBuff():number{return this._AstralResistanceBuff;}
    public set AstralResistanceBuff(AstralResistanceBuff:number){this._AstralResistanceBuff = AstralResistanceBuff;}
    public get StunResistanceBuff():number{return this._StunResistanceBuff;}
    public set StunResistanceBuff(StunResistanceBuff:number){this._StunResistanceBuff = StunResistanceBuff;}
    public get MoveResistanceBuff():number{return this._MoveResistanceBuff;}
    public set MoveResistanceBuff(MoveResistanceBuff:number){this._MoveResistanceBuff = MoveResistanceBuff;}
    public get AccuracyBuff():number{return this._AccuracyBuff;}
    public set AccuracyBuff(AccuracyBuff:number){this._AccuracyBuff = AccuracyBuff;}
    public get CriticalChanceBuff():number{return this._CriticalChanceBuff;}
    public set CriticalChanceBuff(CriticalChanceBuff:number){this._CriticalChanceBuff = CriticalChanceBuff;}
    public get CriticalMultiplierBuff():number{return this._CriticalMultiplierBuff;}
    public set CriticalMultiplierBuff(CriticalMultiplierBuff:number){this._CriticalMultiplierBuff = CriticalMultiplierBuff;}
    public get StunChanceBuff():number{return this._StunChanceBuff;}
    public set StunChanceBuff(StunChanceBuff:number){this._StunChanceBuff = StunChanceBuff;}
    public get BuffDuration():number{return this._BuffDuration;}
    public set BuffDuration(BuffDuration:number){this._BuffDuration = BuffDuration;}


    public constructor()
    {
        this._MaxHealthPointsBuff = 0;
        this._HealthPointsBuff = 0;
        this._ActionPointsBuff = 0;
        this._DodgeBuff = 0;
        this._PhysicalDamageBuff = 0;
        this._FireDamageBuff = 0;
        this._ColdDamageBuff = 0;
        this._LightningDamageBuff = 0;
        this._AstralDamageBuff = 0;
        this._MentalDamageBuff = 0;
        this._BleedChanceBuff = 0;
        this._BleedResistanceBuff = 0;
        this._PoisonChanceBuff = 0;
        this._PoisonResistanceBuff = 0;
        this._PhysicalResistanceBuff = 0;
        this._FireResistanceBuff = 0;
        this._ColdResistanceBuff = 0;
        this._LightningResistanceBuff = 0;
        this._MentalResistanceBuff = 0;
        this._AstralResistanceBuff = 0;
        this._StunResistanceBuff = 0;
        this._MoveResistanceBuff = 0;
        this._AccuracyBuff = 0;
        this._CriticalChanceBuff = 0;
        this._CriticalMultiplierBuff = 0;
        this._StunChanceBuff = 0;
        this._BuffDuration = 0;
    }
}