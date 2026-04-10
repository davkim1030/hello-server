const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

app.get('/', async (req, res) => {
  // 방문 기록 저장
  await supabase.from('visits').insert({});

  // 총 방문 횟수 조회
  const { count } = await supabase
    .from('visits')
    .select('*', { count: 'exact' });

  res.send(`Hello World! 총 방문 횟수: ${count}`);
});

app.listen(PORT, () => {
  console.log(`서버 실행 중 : ${PORT}`);
});
