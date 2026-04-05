import { getSeoEntry } from "@/app/site-seo";

export default function description(pageContext: { urlOriginal: string }) {
  return getSeoEntry(pageContext.urlOriginal).description;
}
