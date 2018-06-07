export{ Status }

import Engeener from "../Engineer";

class Status
{
    private _Stunned:boolean;
    private _Bleeding:boolean;
    private _Poisoned:boolean;

    public get Stunned():boolean{return this._Stunned;}
    public set Stunned(Stunned:boolean){this._Stunned = Stunned;}
    public get Bleeding():boolean{return this._Bleeding;}
    public set Bleeding(Bleeding:boolean){this._Bleeding = Bleeding;}
    public get Poisoned():boolean{return this._Poisoned;}
    public set Poisoned(Poisoned:boolean){this._Poisoned = Poisoned;}

    public constructor()
    {
        this._Stunned = false;
        this._Bleeding = false;
        this._Poisoned = false;
    }
}