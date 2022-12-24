
import glass_4 from "./img/glass_4.png";
import glass_5 from "./img/glass_5.png";
import glass_6 from "./img/glass_6.png";
import glass_8 from "./img/glass_8.png";
import glass_10 from "./img/glass_10.png";
import glass_12 from "./img/glass_12.png";
import camera from "./img/camera.png";
import film from "./img/film.png";

export const TESTING = process.env.NODE_ENV === "development";

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

export function getImg(type, thickness) {
  const options = {
    [GLASS](thick){
      switch(thick){
        case 4: return glass_4
        case 5: return glass_5 
        case 6: return glass_6 
        case 8: return glass_8 
        case 10: return glass_10 
        case 12: return glass_12 
        default: return glass_6
      }
    },
    [SPACER](thick){
      switch(thick){
        default: return camera
      }
    },
    [FILM](thick){
      switch(thick){
        default: return film
      }
    }
  }

  return options[type](Math.round(thickness))
}
  