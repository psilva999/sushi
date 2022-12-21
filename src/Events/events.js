import { colorMenuItem, headerScroll } from "./handleMenu";
import { handleScrollButton } from "./handleScrollButton";

export function events() {
  handleScrollButton()
  headerScroll()
  colorMenuItem()
}