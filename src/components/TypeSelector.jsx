import monosklo from "../img/monosklo.png"
import triplex from "../img/triplex.png"
import odnosklo from "../img/odnosklo.png"
import dvosklo from "../img/dvosklo.png"
import trysklo from "../img/trysklo.png"
import { Button, Card, Container, Image } from "react-bootstrap"
import { useState } from "react"
import style from'../css/TypeSelector.module.css';

const windowTypes = [
    {
        name: "Моноскло",
        img: monosklo
    },
    {
        name: "Тріплекс",
        img: triplex
    },
    {
        name: "Однокамерний склопакет",
        img: odnosklo
    },
    {
        name: "Двокамерний склопакет",
        img: dvosklo
    },
    {
        name: "Трикамерний склопакет",
        img: trysklo
    },
]

export function TypeSelector({nextStep}){
    const [checked, setChecked] = useState(0)

    return (
        <Container>
            <Container className="row row-cols-auto">
                {windowTypes.map(({name, img}, index) => 
                    <Card className={style.card + " col m-4"} key={index}>
                        <Button className={style.button}
                            variant={checked === index ? "primary": "secondary"}
                            onClick={() => {setChecked(index)}}
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