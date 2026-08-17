// ========== 这里替换成你自己Supabase项目的参数 ==========
const SUPABASE_URL = "替换为你的SUPABASE_URL";
const SUPABASE_ANON_KEY = "替换为你的anon公钥";
// ========================================================

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 判断是否管理员
export async function isAdminUser(){
    const {data:{user}} = await supabase.auth.getUser();
    if(!user) return false;
    const {data} = await supabase.from("user_profile").select("is_admin").eq("id",user.id).single();
    return data?.is_admin === true;
}

// 获取当前登录用户
export async function getCurrentUser(){
    const {data:{user}} = await supabase.auth.getUser();
    return user;
}
