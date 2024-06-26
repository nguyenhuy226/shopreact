import { cn } from "@/utils";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const Context = createContext({});
export const Tab = ({
  children,
  defaultAcitve,
  removeOnDeActive,
  onChange,
  name = "tab",
  onSearchChange,
}) => {
  const [search] = useSearchParams();

  const [active, _setActive] = useState(search.get(name) || defaultAcitve);

  const setActive = (value) => {
    _setActive(value);
    onChange?.(value);
  };

  return (
    <Context.Provider
      value={{
        active: search.get(name) || defaultAcitve,
        setActive,
        removeOnDeActive,
        name,
        onSearchChange,
      }}
    >
      {children}
    </Context.Provider>
  );
};

Tab.Title = ({ children, value }) => {
  const { pathname } = useLocation();
  const [search, setSearch] = useSearchParams();
  const { active, setActive, name, onSearchChange } = useContext(Context);

  const link = `${pathname}?${name}=${value}`;
  const onClick = (ev) => {
    ev.preventDefault();
    setActive?.(value);
    setSearch(
      (search) => {
        const _search = new URLSearchParams(search);
        _search.set(name, value);
        onSearchChange?.(_search);
        return _search;
      },
      { replace: true }
    ); // không đưa sự thay đổi cửa setSearch này vào history
  };
  return (
    <a
      onClick={onClick}
      className={cn("nav-link", { active: value === active })}
      href="#"
    >
      {children}
    </a>
  );
};

Tab.Content = ({ children, value }) => {
  const firstRender = useRef(false);
  const { active, removeOnDeActive } = useContext(Context);

  useEffect(() => {
    if (active === value) {
      firstRender.current = true;
    }
  }, [active]);

  if (removeOnDeActive && active !== value) {
    if (!firstRender.current) {
      return null;
    }
  }
  return (
    <div className={cn("tab-pane fade", { "show active": active === value })}>
      {children}
    </div>
  );
};
