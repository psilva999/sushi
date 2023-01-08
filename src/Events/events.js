import { colorMenuItem, headerScroll } from "./handleMenu";
import { handleScrollButton } from "./handleScrollButton";
import { scrollAnime } from "./scrollReveal";

export function events() {
  handleScrollButton()
  headerScroll()
  
  colorMenuItem()
  scrollAnime()
}