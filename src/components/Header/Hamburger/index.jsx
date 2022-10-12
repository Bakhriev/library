import styles from "./Hamburger.module.scss"
import { useContext } from "react"
import { AppContext } from "../../../App"

function Hamburger() {
	const { open } = useContext(AppContext)
	return (
		<div
			className={`${styles.hamburger_layout} ${
				open && styles.hamburger_hover_animate
			}`}
		>
			<span className={`${styles.bar_layout} ${styles.barTop}`}></span>
			<span className={`${styles.bar_layout} ${styles.barMiddle}`}></span>
			<span className={`${styles.bar_layout} ${styles.barBottom}`}></span>
		</div>
	)
}
export default Hamburger
