import { ConnectButton,  lightTheme, } from "@rainbow-me/rainbowkit";
import { RainbowKitProvider, Theme } from '@rainbow-me/rainbowkit';

import styles from "../../styles/Navbar.module.css";



export default function Navbar() {
	const myCustomTheme:Theme  = {
		colors: {	
		  connectButtonBackground: "pink",	 
		},
		
	  };
	return (
		
		<nav className={styles.navbar}>
			 <a href="https://chainlink.com" target={"_blank"}>
				{/*<img className={styles.alchemy_logo} src="/img.png" ></img> */}
			</a> 
		
			<ConnectButton className={styles.button} style={{ backgroundColor: "pink" }}>	
				<RainbowKitProvider coolMode  theme={myCustomTheme}></RainbowKitProvider>
			</ConnectButton>
			
		</nav>
	);
}
