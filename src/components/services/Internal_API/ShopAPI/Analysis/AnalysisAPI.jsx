import domain from "../../../domain";

export async function getShopAnalysis(setIsLoading, setIsHacker) {
  // this grabs the
  setIsLoading(true);

  const token = localStorage.getItem("Token");

  const response = await fetch(`${domain}/api/shop/analysis`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Token ${token}`,
    },
  });
  if (!response.ok) {
    setIsHacker(true);
    setIsLoading(false);
    return "error";
  } else {
    const data = await response.json();
    setIsLoading(false);
    return data;
  }
}
