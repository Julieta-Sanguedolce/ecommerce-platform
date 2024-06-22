import "./HeaderComponent.css";
import Logo from "../../assets/logo.svg";
import IconCart from "../../assets/icon-cart.svg";
import IconUser from "../../assets/icon-user.svg";

export function HeaderComponent(): JSX.Element {
    return (
        <div className="container header">
            <div className="row">
                <div className="col-auto" style={{ paddingTop: "2.2%", paddingLeft: "1.4%" }}>
                    <img className="img-fluid" src={Logo} alt="logo" />
                </div>
                <div className="col-9" style={{ paddingTop: "0.6%" }}>
                    <div className="d-flex flex-row">
                        <div className="nav-link-text first-link">Collections</div>
                        <div className="nav-link-text">Men</div>
                        <div className="nav-link-text"> Women </div>
                        <div className="nav-link-text"> Kids </div>
                        <div className="nav-link-text"> About </div>
                        <div className="nav-link-text">Contact </div>
                    </div>
                </div>

                <div className="col" style={{ paddingTop: "12px", paddingRight: "1.5%"}}>
                    <div className="d-flex flex-row justify-content-end">
                    <img className="p-4" src={IconCart} alt="icon-cart" />
                    <img src={IconUser} alt="icon-user" />
                    </div>
                </div>
            </div>
        </div>
    );
}
