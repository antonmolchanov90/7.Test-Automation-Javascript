const request = require("supertest");

describe('Test Footbal endpoints', () => {
    
    it('Should fail test prediction with 401', async () => {
      const response = await request('https://api-football-v1.p.rapidapi.com')
      .get('/v2/predictions/157462')
      expect(response.body).toHaveProperty('message')
      expect(response.status).toBe(401)
    });
    it('Should fail test football timezone with 403', async () => {
      const response = await request('https://api-football-v1.p.rapidapi.com')
      .get('/v2/timezone')
      .set({ "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "ab8b1ef81dmshb0f5e0f5b544304p164b50jsn83c454ad6bbb",
      "useQueryString": true })
      expect(response.status).toBe(403)
      expect(response.body).toHaveProperty('message')
    });
    it('Should fail to get last fixtures from league id', async () => {
      const response = await request('https://api-football-v1.p.rapidapi.com')
      .get('/v2/fixtures/league/524/last/10')
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty('message')
    });
    it('Should fail to team from id', async () => {
      const response = await request('https://api-football-v1.p.rapidapi.com')
      .get('/v2/teams/team/33')
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty('message')
    });
});
