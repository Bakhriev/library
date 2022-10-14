import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar"
import "./Sidebar.scss"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../App"

function Sidebar() {
	const [toggled, setToggled] = useState(false)
	const { handleClickOpen } = useContext(AppContext)

	const handleToggleSidebar = value => {
		setToggled(value)
		handleClickOpen()
	}

	return (
		<div
			className={`app ${toggled ? "toggled" : ""}`}
			style={{ height: "100%" }}
		>
			<div
				className="btn-toggle"
				onClick={() => handleToggleSidebar(true)}
			></div>
			<ProSidebar
				toggled={toggled}
				onToggle={handleToggleSidebar}
				breakPoint="md"
			>
				<Menu iconShape="square">
					<SubMenu title="Технология нетканных материалов">
						<SubMenu title={"Практика"}>
							<MenuItem onClick={() => handleToggleSidebar(false)}>
								<Link to="/Лаб-1">
									1. Расчесывание волокон и формирование волокнистого холста.
								</Link>
							</MenuItem>
							<MenuItem onClick={() => handleToggleSidebar(false)}>
								<Link to="/Лаб-2">
									2. Производство тканых нетканных материалов и их свойства
								</Link>
							</MenuItem>
							<MenuItem onClick={() => handleToggleSidebar(false)}>
								<Link to="/Лаб-3">
									3. Производство нетканных материалов иглопробивным способом и
									их свойства
								</Link>
							</MenuItem>
							<MenuItem onClick={() => handleToggleSidebar(false)}>
								<Link to="/Лаб-4">
									4. Классификация Связующих для нетканных материалов
								</Link>
							</MenuItem>
							<MenuItem onClick={() => handleToggleSidebar(false)}>
								<Link to="/Лаб-5">5. Распыление Волокна Холста</Link>
							</MenuItem>
							<MenuItem onClick={() => handleToggleSidebar(false)}>
								<Link to="/Лаб-6">6. Получение Нетканых Тканым Способом</Link>
							</MenuItem>
							<MenuItem onClick={() => handleToggleSidebar(false)}>
								<Link to="/Лаб-7">7. Тафтинговые Ткани...</Link>
							</MenuItem>
							<MenuItem onClick={() => handleToggleSidebar(false)}>
								<Link to="/Лаб-8">8. А.С.С Тканых Полос...</Link>
							</MenuItem>
							<MenuItem onClick={() => handleToggleSidebar(false)}>
								<Link to="/Лаб-9">9. А.С.С Трикотажных изделий</Link>
							</MenuItem>
							<MenuItem onClick={() => handleToggleSidebar(false)}>
								<Link to="/Лаб-10">10. Трикотаж и Трикотажные изделия</Link>
							</MenuItem>
						</SubMenu>
					</SubMenu>
				</Menu>
			</ProSidebar>
		</div>
	)
}

export default Sidebar
