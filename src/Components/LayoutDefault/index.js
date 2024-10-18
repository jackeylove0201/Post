import "./layoutdefault.scss"
import { Link, NavLink, Outlet } from "react-router-dom";
function LayoutDefault() {
	
	return (
		<>
			<div className="layout-default">
				<header className="layout-default__header">
					<div className="layout-default__logo">Logo</div>
					<div className="layout-default__menu">
						<ul>
						
						
							
						
			                
					

						</ul>
					</div>
				</header>
				<main className="layout-default__main">
					<Outlet />
				</main>
				<footer className="layout-default__footer">
					Copyright
				</footer>
			</div>
		</>
	)
}
export default LayoutDefault;