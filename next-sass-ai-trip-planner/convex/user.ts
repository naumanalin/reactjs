import { v } from "convex/values";
import { mutation } from "./_generated/server";


//  Convex API Enpoint for User -
export const CreateNewUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        imageUrl: v.string(),
    },

    // Logic to save record
    handler: async (ctx, args) =>{
        // 1. First check is user already exist or not
        const user = await ctx.db.query('user').filter((q) => q.eq(q.field("email"), args.email)).first();

        if(!user){
            const userData = {
                name: args.name,
                email: args.email,
                imageUrl: args.imageUrl
            }
            const newUser = await ctx.db.insert("user" ,userData);
            return newUser;
        } 

        return user;
    }
})