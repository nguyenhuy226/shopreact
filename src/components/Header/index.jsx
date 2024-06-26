import { PATH } from "@/config";
import { avatarDefault } from "@/config/assets";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { logoutAction } from "@/stories/auth";
import { cartActions } from "@/stories/cart";
import { CheckCircleFilled } from "@ant-design/icons";
import { Dropdown, Popover } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CartDrawer } from "../CartDrawer";
import SearchDrawer from "../SearchDrawer";
import { useTranslate } from "../TranslateProvider";

const LANG = {
  en: "English",
  vi: "Tiengs Việt",
  china: "Tiếng Trung",
};

export default function Header() {
  const [onpenSearchDrawer, setOpenSearchDrawer] = useState(false);
  const [onpenCartDrawer, setOpenCartDrawer] = useState(false);
  const { user } = useAuth();
  const { cart, openCartOver } = useCart();
  const dispatch = useDispatch();
  const { t, setLang, lang } = useTranslate();

  return (
    <>
      <SearchDrawer
        open={onpenSearchDrawer}
        onClose={() => setOpenSearchDrawer(false)}
      />
      <CartDrawer
        open={onpenCartDrawer}
        onClose={() => setOpenCartDrawer(false)}
      />
      {/* NAVBAR */}
      <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
        <div className="container">
          {/* Promo */}
          <div className="mr-xl-8">
            <i className="fe fe-truck mr-2" />{" "}
            <span className="heading-xxxs">Vận chuyển toàn cầu</span>
          </div>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#topbarCollapse"
            aria-controls="topbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapse */}
          <div className="navbar-collapse" id="topbarCollapse">
            {/* Nav */}
            <ul className="nav nav-divided navbar-nav mr-auto">
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  <img
                    className="mb-1 mr-1"
                    src="/img/flags/usa.svg"
                    alt="..."
                  />{" "}
                  United States
                </a>
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                  <a className="dropdown-item" href="#!">
                    <img
                      className="mb-1 mr-2"
                      src="/img/flags/usa.svg"
                      alt="USA"
                    />
                    United States
                  </a>
                  <a className="dropdown-item" href="#!">
                    <img
                      className="mb-1 mr-2"
                      src="/img/flags/canada.svg"
                      alt="Canada"
                    />
                    Canada
                  </a>
                  <a className="dropdown-item" href="#!">
                    <img
                      className="mb-1 mr-2"
                      src="/img/flags/germany.svg"
                      alt="Germany"
                    />
                    Germany
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  USD
                </a>
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                  <a className="dropdown-item" href="#!">
                    USD
                  </a>
                  <a className="dropdown-item" href="#!">
                    EUR
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: 1,
                        label: "English",
                        onClick: () => setLang("en"),
                      },
                      {
                        key: 2,
                        label: "Tiếng Việt",
                        onClick: () => setLang("vi"),
                      },
                      {
                        key: 3,
                        label: "Tiếng Trung",
                        onClick: () => setLang("china"),
                      },
                    ],
                  }}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    {LANG[lang]}
                  </a>
                </Dropdown>
              </li>
            </ul>
            {/* Nav */}
            <ul className="nav navbar-nav mr-8">
              <li className="nav-item">
                <Link className="nav-link" to={PATH.ShippingAndReturns}>
                  Quy định giao hàng
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={PATH.Faq}>
                  Câu hỏi
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={PATH.Contact}>
                  Liên hệ
                </Link>
              </li>
            </ul>
            {/* Nav */}
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-medium" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          {/* Brand */}
          <Link className="navbar-brand" to={PATH.Home}>
            <img style={{ width: 50 }} src="/img/logo.svg" />
            Shopper.
          </Link>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapse */}
          <div className="navbar-collapse" id="navbarCollapse">
            {/* Nav */}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to={PATH.Home}>
                  {t("Home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={PATH.Product}>
                  {t("Product")}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/dien-thoai-may-tinh-bang/1789">
                  {t("Phone")}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/laptop-thiet-bi-it/1846">
                  {t("Laptop")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/san-pham?page=1&sort=discount_rate.desc"
                >
                  {t("Biggest promotion")}
                </Link>
              </li>
            </ul>
            {/* Nav */}
            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="modal"
                  href="#modalSearch"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setOpenSearchDrawer(true);
                  }}
                >
                  <i className="fe fe-search" />
                </a>
              </li>
              <li className="nav-item ml-lg-n4">
                <a className="nav-link" href="./account-wishlist.html">
                  <i className="fe fe-heart" />
                </a>
              </li>
              <li className="nav-item ml-lg-n4">
                <Popover
                  onOpenChange={(visible) => {
                    if (!visible) {
                      dispatch(cartActions.togglePopover(false));
                    }
                  }}
                  trigger={["click"]}
                  open={openCartOver}
                  placement="bottomRight"
                  content={
                    <>
                      <p className="mb-0 flex gap-2 items-center">
                        <span className="text-green-500">
                          <CheckCircleFilled />
                        </span>
                        Thêm sản phẩm vào giỏ hàng thành công
                      </p>
                      <Link
                        onClick={() =>
                          dispatch(cartActions.togglePopover(false))
                        }
                        className="w-full btn-xs mt-2 btn btn-dark btn-sm flex items-center justify-center gap-2 w-full btn-xs"
                        to={PATH.ViewCart}
                      >
                        Xem giỏ hàng và thanh toán
                      </Link>
                    </>
                  }
                >
                  <a
                    className="nav-link"
                    href="#"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setOpenCartDrawer(true);
                    }}
                  >
                    <span data-cart-items={cart?.totalQuantity || undefined}>
                      <i className="fe fe-shopping-cart" />
                    </span>
                  </a>
                </Popover>
              </li>
              {user ? (
                <Dropdown
                  arrow
                  placement="bottomRight"
                  menu={{
                    items: [
                      {
                        key: 1,
                        label: (
                          <Link to={PATH.Profile.Order}>Đơn hàng của tôi</Link>
                        ),
                      },
                      {
                        key: 2,
                        label: (
                          <Link to={PATH.Profile.Index}>
                            Thông tin tài khoản
                          </Link>
                        ),
                      },
                      {
                        key: 3,
                        label: "Đăng xuất",
                        onClick: () => {
                          dispatch(logoutAction());
                        },
                      },
                    ],
                  }}
                >
                  <li className="nav-item ml-lg-n4">
                    <Link className="header-avatar nav-link" to={PATH.Account}>
                      <img src={user?.avatar || avatarDefault} />
                    </Link>
                  </li>
                </Dropdown>
              ) : (
                <li className="nav-item ml-lg-n4">
                  <Link className="nav-link" to={PATH.Account}>
                    <i className="fe fe-user" />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
