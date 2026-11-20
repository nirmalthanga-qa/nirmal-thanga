import type { MouseEvent } from 'react';
import { navItems } from '../data/nav';

interface MenuOverlayProps {
  onNavigate: () => void;
}

export function MenuOverlay({ onNavigate }: MenuOverlayProps) {
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest('a')) onNavigate();
  };

  return (
    <nav className="menu" id="menu" aria-label="Sections" onClick={handleClick}>
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
