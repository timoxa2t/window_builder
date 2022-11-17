import { Builder } from "./Builder";
import style from'../css/Body.module.css';



export function Body({children}){

    return (
        <div className={style.body}> 
            {children}
        </div>   
    )
}