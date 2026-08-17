// ========= 已经填好你的Supabase参数 =========
const SUPABASE_URL = "https://scrmlnmmmixstxcmvcyw.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjcm1sbm1tbWl4c3R4Y212Y3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5NTgzMTcsImV4cCI6MjEwMjUzNDMxN30.oIZ8OYHpii6SdYy1zTlMAF4MHWfFDOJJDdiJp4luH_s";
// ==========================================

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm"
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 判断是否管理员
export async function isAdminUser(){
  const { data: {user} } = await supabase.auth.getUser();
  if(!user) return false;
  const { data } = await supabase.from("user_profile").select("is_admin").eq("id",user.id).single();
  return data?.is_admin === true;
}

// 获取当前登录用户
export async function getCurrentUser(){
  const { data: {user} } = await supabase.auth.getUser();
  return user;
}
