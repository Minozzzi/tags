"use client";

import { useFormStatus } from "react-dom";

export const AddTagButton: React.FC = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="bg-gray-600" disabled={pending}>
      {pending ? "Carregando..." : "Criar Tag"}
    </button>
  );
};
