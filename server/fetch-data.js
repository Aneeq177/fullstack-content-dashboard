const axios = require('axios');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sports_hub',
  password: 'Areeb7701', // <-- Make sure your password is correct
  port: 5432,
});

async function syncData() {
  try {
    console.log('Fetching posts from JSONPlaceholder API...');
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=20');
    const posts = response.data;
    console.log(`Successfully fetched ${posts.length} posts.`);

    console.log('Clearing old posts from database...');
    await pool.query('TRUNCATE TABLE posts;');

    console.log('Inserting new posts...');
    for (const post of posts) {
      const query = 'INSERT INTO posts (id, title, body) VALUES ($1, $2, $3)';
      const values = [post.id, post.title, post.body];
      await pool.query(query, values);
    }
    console.log('Finished inserting posts.');

  } catch (error) {
    console.error('An error occurred:', error.message);
  } finally {
    await pool.end();
    console.log('Data synchronization finished.');
  }
}

syncData();