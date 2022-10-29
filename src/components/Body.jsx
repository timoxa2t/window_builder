import { Builder } from "./Builder";
import style from'../css/Body.module.css';



export function Body(){

    return (
        <div className={style.body}> 
            <Builder/>
        </div>   
    )
}