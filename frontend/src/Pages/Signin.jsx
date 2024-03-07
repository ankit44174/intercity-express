import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Login from "../Components/Login";

export default function SigninPage(props) {
	return (
		<div className="home-header">
			<Header />
			<Login setLoggedIn={props.setLoggedIn} />
			<Footer />
		</div>
	);
}
