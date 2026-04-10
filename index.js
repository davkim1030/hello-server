// 기존 (count가 null로 올 수 있음)
const { count } = await supabase
  .from('visits')
  .select('*', { count: 'exact' });

// 변경 (직접 rows를 가져와서 길이로 계산)
const { data } = await supabase
  .from('visits')
  .select('id');

res.send(`Hello World! 총 방문 횟수: ${data?.length ?? 0}`);

