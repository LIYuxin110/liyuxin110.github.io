// 把下面两个值替换成你Supabase项目里面复制出来的
const SUPABASE_URL = "替换为你的SUPABASE_URL";
const SUPABASE_ANON_KEY = "替换为你的anon公钥";

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 判断当前登录用户是否管理员
export async function isAdminUser(){
    const {data:{user}} = await supabase.auth.getUser();
    if(!user) return false;
    const {data} = await supabase.from("user_profile").select("is_admin").eq("id",user.id).single();
    return data?.is_admin === true;
}
