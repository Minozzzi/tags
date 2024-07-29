import React from "react";

type Tag = {
  id: string;
  slug: string;
};

export const Tags: React.FC = async () => {
  // fake api delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch("http:localhost:3333/tags", {
    next: {
      tags: ["get-tags"],
    },
  });
  const tags: Tag[] = await response.json();

  return (
    <ul>
      {tags.map((tag) => (
        <li key={tag.id}>{tag.slug}</li>
      ))}
    </ul>
  );
};
