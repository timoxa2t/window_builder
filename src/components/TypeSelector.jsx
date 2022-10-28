import monosklo from "../img/monosklo.png"
import triplex from "../img/triplex.png"
import odnosklo from "../img/odnosklo.png"
import dvosklo from "../img/dvosklo.png"
import trysklo from "../img/trysklo.png"
import { Button, Card, Container, Image } from "react-bootstrap"
import { useState } from "react"

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

export function TypeSelector(){
    const [checked, setChecked] = useState(0)
    return (
        <Container>
            <Container className="row row-cols-auto">
                {windowTypes.map(({name, img}, index) => 
                    <Card className="col m-4 p-4">
                        <Button 
                            variant={checked === index ? "primary": "secondary"}
                            onClick={() => {setChecked(index)}}
                        >{name}
                        </Button>
                        <Image className="m-2" src={img} alt="window type" width="150"/>
                    </Card>
                )}
                
            </Container>
            <Button variant="primary" type="submit">
                Перейти до наступного кроку
            </Button>
        </Container>
    )
}