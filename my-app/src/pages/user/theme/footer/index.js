import {memo} from "react"
import "./style.scss"

const Footer = () => {
    return (
        <>
            <div className={"footer__top"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"text__block"}>
                            <span>
                                LONG SHOP
                            </span>
                            <span>
                                Dia Chi: 213 Duong Dinh Nghe
                            </span>
                            <span>
                                Phone: 0988-687-988
                            </span>
                            <span>
                                Email: Long123@gmail.com
                            </span>
                        </div>
                        <div className={"text__block"}>
                            <span>
                                Cua Hang
                            </span>
                            <span>
                                Lien He
                            </span>
                            <span>
                                Thong tin ve chung toi
                            </span>
                            <span>
                                San pham kinh doanh
                            </span>
                        </div>
                        <div className={"text__block"}>
                            <span>
                                Thong tin khach hang
                            </span>
                            <span>
                                Gio hang
                            </span>
                            <span>
                                Danh sach ua thich
                            </span>
                        </div>
                        <div className={"text__block"}>
                            <span>
                                
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(Footer);