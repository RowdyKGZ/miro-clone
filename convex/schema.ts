import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  boards: defineTable({
    orgId: v.string(),
    title: v.string(),
    authorId: v.string(),
    authorName: v.string(),
    imageUrl: v.string(),
  })
    .index("by_org", ["orgId"])
    .searchIndex("search_title", {
      searchField: "title",
      filterFields: ["orgId"],
    }),
});
