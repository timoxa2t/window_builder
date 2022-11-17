
import glass_12 from "./img/glass_12.png";
import camera from "./img/camera.png";
import film from "./img/film.png";

export const GLASS = "type_glass";
export const SPACER = "type_spacer";
export const FILM = "type_film";


export function getDetails(recipe){
    let counters = {}
    let type = ""
    let name = ""
    let key = ""
    return  recipe.map((item) => {
      switch(item){
        case GLASS: 
          type = GLASS
          name = "Скло"
          key = "glass"
          break
        case SPACER: 
          type = SPACER
          name = "Камера"
          key = "spacer"
          break
        case FILM: 
          type = FILM
          name = "Плівка"
          key = "film"
          break
      }
  
      counters[type] = counters.hasOwnProperty(type) ? ++counters[type]: 1 
  
      return {
        key: `${key}_${counters[type]}`,
        name: `${name} ${counters[type]}`,
        type: type,
      }
    })
  }

export function getImg(type) {
    switch (type) {
        case GLASS:
        return glass_12;
        case SPACER:
        return camera;
        case FILM:
        return film;
    }
}
  