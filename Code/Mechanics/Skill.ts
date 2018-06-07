export{ Skill }

import Engineer from "../Engineer";
import { Unit } from "../Unit/Unit";
import { Hud } from "../UI/Hud";
import { Buffs } from "./Buffs";

class Skill
{    
    private _PhysicalDamage:number;
    private _AstralDamage:number;
    private _FireDamage:number;
    private _ColdDamage:number;
    private _LightningDamage:number;
    private _MentalDamage:number;
    private _CriticalMultiplier:number;
    private _CriticalChance:number;
    private _Accuracy:number;
    private _ActionPointsCost:number;
    private _TargetPositions:number[];
    private _StunChance:number;
    private _BleedChance:number;
    private _PoisonChance:number;
    protected _Caster:Unit;
    protected _Sprite:Engineer.Sprite;

    public get PhysicalDamage():number{return this._PhysicalDamage;}
    public set PhysicalDamage(PhysicalDamage:number){this._PhysicalDamage = PhysicalDamage;}
    public get AstralDamage():number{return this._AstralDamage;}
    public set AstralDamage(AstralDamage:number){this._AstralDamage = AstralDamage;}
    public get FireDamage():number{return this._FireDamage;}
    public set FireDamage(FireDamage:number){this._FireDamage = FireDamage;}
    public get ColdDamage():number{return this._ColdDamage;}
    public set ColdDamage(ColdDamage:number){this._ColdDamage = ColdDamage;}
    public get LightningDamage():number{return this._LightningDamage;}
    public set LightningDamage(LightningDamage:number){this._LightningDamage = LightningDamage;}
    public get MentalDamage():number{return this._MentalDamage;}
    public set MentalDamage(MentalDamage:number){this._MentalDamage = MentalDamage;}
    public get CriticalMultiplier():number{return this._CriticalMultiplier;}
    public set CriticalMultiplier(CriticalMultiplier:number){this._CriticalMultiplier = CriticalMultiplier;}
    public get CriticalChance():number{return this._CriticalChance;}
    public set CriticalChance(CriticalChance:number){this._CriticalChance = CriticalChance;}
    public get Accuracy():number{return this._Accuracy;}
    public set Accuracy(Accuracy:number){ this._Accuracy = Accuracy;}
    public get ActionPointsCost():number{return this._ActionPointsCost;}
    public set ActionPointsCost(ActionPointsCost:number){this._ActionPointsCost = ActionPointsCost;}
    public get StunChance():number{return this._StunChance;}
    public set StunChance(StunChance:number){this._StunChance = StunChance;}
    public get BleedChance():number{return this._BleedChance;}
    public set BleedChance(BleedChance:number){this._BleedChance = BleedChance;}
    public get PoisonChance():number{return this._PoisonChance;}
    public set PoisonChance(PoisonChance:number){this._PoisonChance = PoisonChance;}
    public get TargetPositions():number[]{return this._TargetPositions;}
    public set TargetPositions(TargetPositions:number[]){this._TargetPositions = TargetPositions;}
    public get Sprite():Engineer.Sprite{return this._Sprite;}
    public set Sprite(Sprite:Engineer.Sprite){this._Sprite = Sprite;}

    public constructor()
    {        
         this._PhysicalDamage = 0;
         this._AstralDamage = 0;
         this._FireDamage = 0;
         this._ColdDamage = 0;
         this._LightningDamage = 0;
         this._MentalDamage = 0;
         this._CriticalMultiplier = 2;
         this._CriticalChance = 0;
         this._Accuracy = 85;
         this._ActionPointsCost = 25;
         this._TargetPositions = [0,1,2,3,4];
         this._StunChance = 0;
         this._BleedChance = 0;
         this._PoisonChance = 0;
         this._Sprite = new Engineer.Sprite();
    }
    private DamageCalculation(Damage:number, Resist:number)  : number
    {
        return (1 - Resist * 1.0/(1+Damage+Resist))*Damage;
    }

    public CalculateDMG(Target:Unit):number
    {
        let totalDmg:number = 0;
        let rollStun:number = Math.random()*100;
        let rollBleed:number = Math.random()*100;
        let rollPoison:number = Math.random()*100;
        let rollCrit:number = Math.random()*100;
        let crit:boolean=false;
        
        let AllBuffsCaster:Buffs = this.CalculatedAllBuffBonuses(this._Caster);
        let AllBuffsTarget:Buffs = this.CalculatedAllBuffBonuses(Target);
        
        if(rollStun < this.StunChance + AllBuffsCaster.StunChanceBuff - AllBuffsTarget.StunResistanceBuff)Target.Status.Stunned = true;
        if(rollBleed < this.BleedChance + AllBuffsCaster.BleedChanceBuff - AllBuffsTarget.BleedResistanceBuff)Target.Status.Bleeding = true;
        if(rollStun < this.StunChance + AllBuffsCaster.PoisonChanceBuff - AllBuffsTarget.PoisonResistanceBuff)Target.Status.Poisoned = true;
        
        if(rollCrit<this.CriticalChance + AllBuffsCaster.CriticalChanceBuff)crit = true;

        if(this.PhysicalDamage!=0)totalDmg +=this.DamageCalculation(this.PhysicalDamage + AllBuffsCaster.PhysicalDamageBuff, Target.Stats.PhysicalResistance + AllBuffsTarget.PhysicalResistanceBuff);
        if(this.FireDamage!=0)totalDmg +=this.DamageCalculation(this.FireDamage + AllBuffsCaster.FireDamageBuff, Target.Stats.FireResistance + AllBuffsTarget.FireResistanceBuff);
        if(this.ColdDamage!=0)totalDmg +=this.DamageCalculation(this.ColdDamage + AllBuffsCaster.ColdDamageBuff, Target.Stats.ColdResistance + AllBuffsTarget.ColdResistanceBuff);
        if(this.LightningDamage!=0)totalDmg +=this.DamageCalculation(this.LightningDamage + AllBuffsCaster.LightningDamageBuff, Target.Stats.LightningResistance + AllBuffsTarget.LightningResistanceBuff);
        if(this.AstralDamage!=0)totalDmg +=this.DamageCalculation(this.AstralDamage + AllBuffsCaster.AstralDamageBuff, Target.Stats.AstralResistance + AllBuffsTarget.AstralResistanceBuff);        
        if(this.MentalDamage!=0)totalDmg +=this.DamageCalculation(this.MentalDamage + AllBuffsCaster.MentalDamageBuff, Target.Stats.MentalResistance + AllBuffsTarget.MentalResistanceBuff);

        if(crit)totalDmg *= this.CriticalMultiplier;
        console.log(totalDmg);

        return totalDmg;
    }

    public CalculatedAllBuffBonuses(Unit:Unit):Buffs
    {
        let AllBuffs:Buffs = new Buffs();
        
        for(let i=0; i<Unit.Buff.length; i++)
        {
        AllBuffs.MaxHealthPointsBuff+=this._Caster.Buff[i].MaxHealthPointsBuff;
        AllBuffs.HealthPointsBuff+=this._Caster.Buff[i].HealthPointsBuff;
        AllBuffs.ActionPointsBuff+=this._Caster.Buff[i].ActionPointsBuff;
        AllBuffs.DodgeBuff+=this._Caster.Buff[i].DodgeBuff;
        AllBuffs.BleedChanceBuff+=this._Caster.Buff[i].BleedChanceBuff;
        AllBuffs.BleedResistanceBuff+=this._Caster.Buff[i].BleedResistanceBuff;
        AllBuffs.PoisonChanceBuff+=this._Caster.Buff[i].PoisonChanceBuff;
        AllBuffs.PoisonResistanceBuff+=this._Caster.Buff[i].PoisonResistanceBuff;        
        AllBuffs.PhysicalDamageBuff+=this._Caster.Buff[i].PhysicalDamageBuff;
        AllBuffs.FireDamageBuff+=this._Caster.Buff[i].FireDamageBuff;
        AllBuffs.ColdDamageBuff+=this._Caster.Buff[i].ColdDamageBuff;
        AllBuffs.LightningDamageBuff+=this._Caster.Buff[i].LightningDamageBuff;
        AllBuffs.AstralDamageBuff+=this._Caster.Buff[i].AstralDamageBuff;
        AllBuffs.MentalDamageBuff+=this._Caster.Buff[i].MentalDamageBuff;
        AllBuffs.PhysicalResistanceBuff+=this._Caster.Buff[i].PhysicalResistanceBuff;
        AllBuffs.FireResistanceBuff+=this._Caster.Buff[i].FireResistanceBuff;
        AllBuffs.ColdResistanceBuff+=this._Caster.Buff[i].ColdResistanceBuff;
        AllBuffs.LightningResistanceBuff+=this._Caster.Buff[i].LightningResistanceBuff;
        AllBuffs.AstralResistanceBuff+=this._Caster.Buff[i].AstralResistanceBuff;
        AllBuffs.MentalResistanceBuff+=this._Caster.Buff[i].MentalResistanceBuff;           
        AllBuffs.MoveResistanceBuff+=this._Caster.Buff[i].MoveResistanceBuff;
        AllBuffs.AccuracyBuff+=this._Caster.Buff[i].AccuracyBuff;      
        AllBuffs.CriticalChanceBuff+=this._Caster.Buff[i].CriticalChanceBuff;
        AllBuffs.CriticalMultiplierBuff+=this._Caster.Buff[i].CriticalMultiplierBuff;
        AllBuffs.StunChanceBuff+=this._Caster.Buff[i].StunChanceBuff;
        AllBuffs.StunResistanceBuff+=this._Caster.Buff[i].StunResistanceBuff;
        }
        return AllBuffs;
    }
    
}