// src/components/Button/Button.tsx
import './button.tsx'; // Fichier CSS dédié

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => (
  <button className="button" onClick={onClick}>
    {label}
  </button>
);