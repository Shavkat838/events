import { create } from "zustand";

type AuthType={
    status:"login"|"register",
    setAuth:(param:"login"|"register")=>void
}

export const authStore=create<AuthType>((set)=>({
  status:"login",
  setAuth:(param)=>set({status:param})
}))



