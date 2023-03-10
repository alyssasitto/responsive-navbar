import { useState } from "react";

require("./Navbar.css");

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const toggleNav = () => {
		setNav(!nav);
	};

	return (
		<nav className={nav ? "active" : ""}>
			<button onClick={toggleNav}>
				<img src="images/menu.svg" />
			</button>

			<div className={nav ? "active" : ""}>
				<button onClick={toggleNav}>
					<img src="images/exit.svg" />
				</button>

				<ul>
					<li>
						<img src="images/home.svg" />
						<p>Home</p>
					</li>

					<li>
						<img src="images/message.svg" />
						<p>Messages</p>
					</li>

					<li>
						<img src="images/bell.svg" />
						<p>Notifications</p>
					</li>

					<li>
						<img src="images/cog.svg" />
						<p>Settings</p>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
