import menuIcon from '../assets/menu.png';

interface HeaderProps {
  open: boolean;
  onToggle: () => void;
}

export function Header({ open, onToggle }: HeaderProps) {
  return (
    <header className="hd">
      <a className="logo" href="#top">
        Nirmal Kumar
      </a>
      <button
        className="burger"
        id="burger"
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="menu"
        onClick={onToggle}
      >
        <img width={44} height={44} src={menuIcon} alt="" />
      </button>
    </header>
  );
}
