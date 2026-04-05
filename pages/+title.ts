import { getSeoEntry } from "@/app/site-seo";

export default function title(pageContext: { urlOriginal: string }) {
  return getSeoEntry(pageContext.urlOriginal).title;
}
