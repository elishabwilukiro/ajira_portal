import {createContext, useState, useContext, useEffect} from 'react';
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;
const AuthContext = createContext();


export const AuthProvider = ({children}) =>{
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const checkAuth = async () => {

			try {
				
				const res = await axios.get(`${API_URL}/auth/me`,{
					withCredentials: true
				});
				setUser(res.data.user ?? data.user);

			} catch (errors) {
				setUser(null);

			} finally {
				setLoading(false);

			}
		}

		checkAuth();
	},[]);

	// Logout
	const logout = async () => {

		try {
			
			await axios.post(`${API_URL}/auth/logout`,{},{
				withCredentials: true
			});

		} catch {

		} finally {
			setUser(null);
		}
	}

	return (

		<AuthContext.Provider value={{user,setUser,logout,loading}}>
			{children}
		</AuthContext.Provider>


	);

}

export const useAuth = () => useContext(AuthContext	);