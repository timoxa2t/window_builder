
import { Button, Card, Container, Image } from "react-bootstrap"
import { useState } from "react"
import style from'../css/TypeSelector.module.css';
import { useDispatch, useSelector } from "react-redux";
import { setType } from "../store/glass/actions";



export function TypeSelector({nextStep}){
    
    const windowTypes = useSelector(state => state.glass.windowTypes)
    const [checked, setChecked] = useState(windowTypes[0].id)
    const dispatch = useDispatch()
    
    
    const setWindowType = (id) => {
        dispatch(setType(id))
        setChecked(id)
    }

    return (
        <Container>
            <Container className="row row-cols-auto">
                {windowTypes.map(({name, img, id}, index) => 
                    <Card className={style.card + " col m-4"} key={index} onClick={() => setWindowType(id)}>
                        <Button className={style.button}
                            variant={checked === id ? "primary": "secondary"}
                        >{name}
                        </Button>
                        <Image src={img} alt="window type" height="200"/>
                    </Card>
                )}
                
            </Container>
            <Button variant="primary" type="submit" onClick={nextStep}>
                Перейти до наступного кроку
            </Button>
        </Container>
    )
}