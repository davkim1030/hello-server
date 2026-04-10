const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

app.get('/', async (req, res) => {
  await supabase.from('visits').insert({ visited_at: new Date().toISOString() });

  const { data } = await supabase
    .from('visits')
    .select('id');

  res.send(`Hello World! 총 방문 횟수: ${data?.length ?? 0}`);
});

app.listen(PORT, () => {
  console.log(`서버 실행 중 : ${PORT}`);
});
