import {memo} from "react"
import "./style.scss"
import {Link} from "react-router-dom";
import {RiFacebookBoxLine,RiInstagramLine, RiLinkedinBoxLine} from "react-icons/ri"

const Footer = () => {
    return (
        <footer className={"footer"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-lg-3"}>
                        <div className={"footer__about"}>
                            <h1 className={"footer__about__logo"}>
                                LONG SHOP
                            </h1>
                            <ul>
                                <li>Dia Chi: 213 Duong Dinh Nghe</li>
                                <li>Phone: 0988-687-988</li>
                                <li>Email: Long123@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"col-lg-6"}>
                        <div className={"footer__widget"}>
                            <h6>
                                Cua Hang
                            </h6>
                            <ul>
                                <li>
                                    <Link to={""}>
                                        Lien he
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        Thong tin ve chung toi
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        San pham kinh doanh
                                    </Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link to={""}>
                                        Thong tin tai khoan
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        Gio hang
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        Danh sach ua thich
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={"col-lg-3"}>
                        <div className={"footer__widget"}>
                            <h6>
                                Khuyen mai & uu dai
                            </h6>
                            <p>
                                Dang ki nhan thong tin tai day
                            </p>
                            <form action="#">
                                <div className={"input-group"}>
                                    <input type="text" placeholder={"Nhap email"}/>
                                    <button type="submit" className={"button-submit"}>
                                        Tim kiem
                                    </button>
                                </div>
                                <div className={"footer__widget__social"}>
                                    <div>
                                        <RiFacebookBoxLine/>
                                    </div>
                                    <div>
                                        <RiInstagramLine/>
                                    </div>
                                    <div>
                                        <RiLinkedinBoxLine/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default memo(Footer);