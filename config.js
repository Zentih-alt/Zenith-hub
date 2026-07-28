// ============================================
// Zenith Shop — Supabase Config
// เอา URL และ anon key จาก Supabase Dashboard > Project Settings > API
// มาใส่แทนที่ 2 บรรทัดด้านล่างนี้ (ไฟล์นี้ไฟล์เดียว ใช้ร่วมกันทุกหน้า)
// ============================================
const SUPABASE_URL = "https://uwtccvpnibnnrevlpisq.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_qpK_3wLac45TyznKmjm_gQ_v_5eehoG";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
