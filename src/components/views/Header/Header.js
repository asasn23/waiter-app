import NavBar from "../NavBar/NavBar";

const Header = (props) => {
    return (
        <div>
            <NavBar />
            <h1>{props.children}</h1>
        </div>
    )
};

export default Header