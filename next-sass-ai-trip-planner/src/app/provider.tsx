"use client";
import React, { useContext, useEffect, useState } from "react";
import Header from "./_components/Header";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "@/context/UserDetailContext";

const Provider = ({ children }: { children: React.ReactNode }) => {
    const createNewUser = useMutation(api.user.CreateNewUser);
    const { user } = useUser();
    const [userDetails, setUserDetails] = useState<any>(null);


    const saveUser = async () => {
        try {
            if (!user) return;

            const result = await createNewUser({
                name: user.fullName || "Anonymous",
                email: user.primaryEmailAddress?.emailAddress || "",
                imageUrl: user.imageUrl || "",
            });

            console.log("✅ User created or already exists:", result);
            setUserDetails(result);
        } catch (error) {
            console.error("❌ Error creating user:", error);
        }
    };

    // ✅ Automatically create a user when Clerk user is available
    useEffect(() => {
        user && saveUser();
    }, [user, createNewUser]);

    return (
        <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
            <Header />
            {children}
        </UserDetailContext.Provider>
    );
};

export default Provider;


export const useUserDetails = ()=>{
    return useContext(UserDetailContext)
}