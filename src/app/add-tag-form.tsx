import { revalidateTag } from "next/cache";
import { AddTagButton } from "./add-tag-button";

export const AddTagForm: React.FC = async () => {
  async function handleCreateTag(form: FormData) {
    "use server";

    const slug = form.get("slug");

    if (!slug) {
      return;
    }

    // fake api delay
    await new Promise((resolve) => setTimeout(resolve, 3000));

    await fetch("http://localhost:3333/tags", {
      method: "POST",
      body: JSON.stringify({
        slug,
      }),
    });

    revalidateTag("get-tags");
  }

  return (
    <form
      className="flex gap-2"
      action={handleCreateTag}
      method="POST"
      encType="multipart/form-data"
    >
      <input
        type="text"
        name="slug"
        placeholder="Slug da tag"
        className="text-black"
      />

      <AddTagButton />
    </form>
  );
};
