import './style.scss'
import {memo, useState} from "react"
import {RiPhoneLine,RiShoppingCart2Line, RiMailLine,RiFacebookBoxLine,RiInstagramLine, RiLinkedinBoxLine,RiTwitterLine,RiUser3Line } from "react-icons/ri";
import {AiOutlineMenu } from "react-icons/ai";
import {Link} from "react-router-dom";
import {formatter} from "../../../../utils/fomater";
import {ROUTERS} from "../../../../utils/router";
const Header = () => {
    const [isShowcategories,setShowcategories]=useState(false)
    const [menus,setMenus]=useState([
        {
            name: "Trang Chủ",
            path: ROUTERS.USER.HOME
        },
        {
            name: "Cửa Hàng",
            path: ROUTERS.USER.SHOP
        },
        {
            name: "Sản Phẩm",
            path: "",
            isShowSubMenu: false,
            child: [
                {
                    name: "Thịt",
                    path: ""
                },
                {
                    name: "Rau Củ",
                    path: ""
                },
                {
                    name: "Thức Ăn Nhanh",
                    path: ""
                }
            ],
        },
        {
            name: "Bài Viết",
            path: ""
        },
        {
            name: "Liên Hệ",
            path: ""
        }
    ])
    
    return (
        <>
            <div className={"header__top"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-6 header__top_left"}>
                            <ul>
                                <li>
                                    <RiMailLine />
                                    Long123@gmail.com
                                </li>
                                <li>
                                    Free ship when payment is above {formatter(200000)}
                                </li>
                            </ul>
                        </div>
                        <div className={"col-6 header__top_right"}>
                            <ul>
                                <li>
                                    <Link to={""}>
                                        <RiFacebookBoxLine />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <RiInstagramLine />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <RiLinkedinBoxLine />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <RiTwitterLine />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <RiUser3Line />
                                    </Link>
                                    <span>
                                        Sign up
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-lg-3"}>
                        <div className={"header__logo"}>
                            <h1>LONG SHOP</h1>
                        </div>
                    </div>
                    <div className={"col-lg-6"}>
                        <nav className={"header__menu"}>
                            <ul>
                                {
                                    menus?.map((menu,menuKey) => (
                                        <li key = {menuKey} className={menuKey === 0 ? "active" : ""}>
                                            <Link to={menu?.path}>
                                                {menu?.name}
                                            </Link>
                                            {
                                                menu.child && (
                                                    <ul className={"header__menu__dropdown"}>
                                                        {
                                                            menu.child.map((childItem,childKey)=>(
                                                                <li key={`${menuKey}-${childKey}`}>
                                                                    <Link to={childItem.path}>
                                                                        {childItem.name}
                                                                    </Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                )
                                            }
                                        </li>
                                    ))
                                }

                                <li>

                                    <ul>
                                        <li>
                                            
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={"col-lg-3"}>
                        <div className={"header__cart"}>
                            <div className={"header__cart__price"}>
                                <span>{formatter(3431234)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to={"#"}>
                                        <RiShoppingCart2Line />
                                        <span className={"order"}>
                                            5
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"container"}>
                <div className={"row hero__categories_container"}>
                    <div className={"col-lg-3 hero__categories"}>
                        <div className={"hero__categories_all"} onClick={() => setShowcategories(!isShowcategories)}>
                            <AiOutlineMenu/>
                            Danh sach san pham
                        </div>
                        <ul className={isShowcategories ? "" : "hidden"}>
                            <li>
                                <Link to={""}>
                                    Thit tuoi
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    Rau cu
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    Trai cay
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    Nuoc trai cay
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    Hai san
                                </Link>
                            </li>   
                        </ul>
                    </div>
                    <div className={"col-lg-9 hero__search_container"}>
                        <div className={"hero__search"}>
                            <div className={"hero__search__form"}>
                                <form >
                                    <input type="text" placeholder={"Ban dang tim gi"}/>
                                    <button type="submit" className={"button-submit button-submit1"}>
                                        Dang ki
                                    </button>
                                </form>
                            </div>
                            <div className={"hero__search__phone"}>
                                <div className={"hero__search__phone__icon"}>
                                    <RiPhoneLine/>
                                </div>
                                <div className={"hero__search__phone__text"}>
                                    <p>
                                        0218.371.787
                                    </p>
                                    <span>
                                        Ho tro 24/7
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={"hero__item"}>
                            <div className={"hero__text"}>
                                <span>
                                    Trai cay tuoi
                                </span>
                                <h2>
                                    Rau qua <br/>
                                    sach 100%
                                </h2>
                                <p>
                                    Mien phi giao hang tan noi
                                </p>
                                <Link to={""} className={"primary-button"}>
                                    Mua ngay
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
}

export default memo(Header);