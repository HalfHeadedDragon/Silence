export {Party}

import Engineer from "./Engineer";
import { CharacterClass } from "./Unit/CharacterClass";
import { GameScene } from "./GameScene";

class Party
{
    private _GameScene:GameScene;
    private _Characters:CharacterClass[];
    
    public get Characters():CharacterClass[]{return this._Characters;}
    public set Characters(Characters:CharacterClass[]){this._Characters = Characters;}

    public constructor(GameScene:GameScene, Characters:CharacterClass[], Side:number)
    {
        this._GameScene = GameScene;
        for(let i=0;i<Characters.length;i++)
        {
            this._Characters = Characters;
            this._Characters[i].Trans.Translation = new Engineer.Vertex(this._Characters[i].Trans.Translation.X+96+192*i + Side*960, this._Characters[i].Trans.Translation.Y, this._Characters[i].Trans.Translation.Z);
            this._Characters[i].Position = i;
            this._Characters[i].Side = Side;
            this._Characters[i].Fixed = true;
        }
        this.addPartyOnScene();
    }
    public addPartyOnScene()
    {
        for(let i=0;i<this._Characters.length;i++)this._GameScene.AddSceneObject(this._Characters[i]);
    }
    public getMember(Position:number):CharacterClass
    {
        return this._Characters[Position];
    }
}