export { Movement }

import Engineer from "./Engineer";
import { GameScene } from "./GameScene";

class Movement
{
    private _GameScene:GameScene;   
    private _Left:boolean = false;
    private _Right:boolean = false;

    public constructor(GameScene:GameScene)
    {
        this._GameScene = GameScene;             
        GameScene.Events.TimeTick.push(this.Move.bind(this));
        GameScene.Events.KeyDown.push(this.KeyDown.bind(this));
        GameScene.Events.KeyUp.push(this.KeyUp.bind(this));
    }

    private Move()
    {
        if(this._Right)this._GameScene.Trans.Translation = new Engineer.Vertex(this._GameScene.Trans.Translation.X + 3, this._GameScene.Trans.Translation.Y, 2);
        if(this._Left)this._GameScene.Trans.Translation = new Engineer.Vertex(this._GameScene.Trans.Translation.X - 3, this._GameScene.Trans.Translation.Y, 2);
    }

    private KeyDown(Game:Engineer.Game, Args:any) : void
    {
        if(Args.KeyCode == 37)
        {
            this._Right = true;
        }
        else if(Args.KeyCode == 39)
        {
            this._Left = true;
        }
    }

    private KeyUp(Game:Engineer.Game, Args:any) : void
    {
        if(Args.KeyCode == 37)
        {
            this._Right = false;
        }
        else if(Args.KeyCode == 39)
        {
            this._Left = false;
        }
    }
}