import { get, ref } from "firebase/database";
import { redirect } from "react-router-dom";
import { db } from "../../firestore/clientApp";
import PageWrapper from "../Root/PageWrapper";

export async function loader() {
  const dbRef = ref(db, "published_posts");
  const posts = (await get(dbRef)).val();

  // Can't believe I have to do this imperatively...
  let mostRecentDate = null,
    mostRecentPostKey = null;

  for (const key in posts) {
    const date = new Date(posts[key]["createdDate"]);
    if (!mostRecentDate || date > mostRecentDate) {
      mostRecentDate = date;
      mostRecentPostKey = key;
    }
  }

  return redirect(`/${mostRecentPostKey}`);
}

export default function NewPage() {
  return <PageWrapper>Something went wrong...</PageWrapper>;
}
