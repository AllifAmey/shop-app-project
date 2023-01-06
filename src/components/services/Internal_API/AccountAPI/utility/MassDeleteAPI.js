import domain from "../../../domain";

export async function massDelete(setIsLoading, object_type, object_ids) {
  // essentially deletes objects on mass given the list of ids
  setIsLoading(true);

  const token = localStorage.getItem("Token");

  const response = await fetch(`${domain}/api/shop/user/mass_delete`, {
    method: "POST",
    body: JSON.stringify({
      object_type: object_type,
      ids: object_ids,
    }),
    headers: {
      "Content-type": "application/json",
      Authorization: `Token ${token}`,
    },
  });
  const data = await response.json();

  setIsLoading(false);
  return data;
}
