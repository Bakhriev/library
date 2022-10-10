import Header from './components/Header'
import Main from './components/Main'
import { useState, createContext } from 'react'

export const AppContext = createContext({})

function App() {
	const [open, setOpen] = useState(false)

	const handleClickOpen = () => {
		setOpen(!open)
	}

	return (
		<div className='wrapper'>
			<AppContext.Provider value={{ handleClickOpen, open }}>
				<Header />
				<Main />
			</AppContext.Provider>
		</div>
	)
}

export default App
