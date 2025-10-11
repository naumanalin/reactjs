import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({
    // convex automatically add id column ...
    user:defineTable({
        name: v.string(),
        email: v.string(),
        imageUrl: v.string(),
        subscription: v.optional(v.string()),
    })
})