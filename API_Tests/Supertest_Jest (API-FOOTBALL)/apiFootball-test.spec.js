const request = require("supertest")

describe('Test Footbal endpoints', () => {
    
  it('Should fail test prediction with 401', async () => {
    const response = await request('https://api-football-v1.p.rapidapi.com')
      .get('/v3/predictions')
      .query({'fixture':'198772'})
      /*.set({ "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "2cb37ea53fmshe6b4d6177ba7579p1cd6a4jsn6a245104bfdb",
      "useQueryString": true })*/
    expect(response.body).toHaveProperty('message')
    expect(response.status).toBe(401)
  })
  it('Should fail test football timezone with 403', async () => {
    const response = await request('https://api-football-v1.p.rapidapi.com')
      .get('/v3/timezone')
      .set({ "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "2cb37ea53fmshe6b4d6177ba7579p1cd6a4jsn6a245104bfdb",
      "useQueryString": true })
    expect(response.status).toBe(403)
    expect(response.body).toHaveProperty('message')
  })
  it('Should fail to get the list of seasons available for a team with 403', async () => {
    const response = await request('https://api-football-v1.p.rapidapi.com')
      .get('/v3/teams/seasons')
      .query({'team':'33'})
      .set({ "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "2cb37ea53fmshe6b4d6177ba7579p1cd6a4jsn6a245104bfdb",
      "useQueryString": true })
    expect(response.status).toBe(403)
    expect(response.body).toHaveProperty('message')
  })
  it('Should fail to get available leagues with 403', async () => {
    const response = await request('https://api-football-v1.p.rapidapi.com')
      .get('/v3/leagues')
      .set({ "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "2cb37ea53fmshe6b4d6177ba7579p1cd6a4jsn6a245104bfdb",
      "useQueryString": true })
    expect(response.status).toBe(403)
    expect(response.body).toHaveProperty('message')
  })
  it('Should fail to get available countries with 403', async () => {
    const response = await request('https://api-football-v1.p.rapidapi.com')
      .get('/v3/countries')
      .set({ "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "2cb37ea53fmshe6b4d6177ba7579p1cd6a4jsn6a245104bfdb",
      "useQueryString": true })
    expect(response.status).toBe(403)
    expect(response.body).toHaveProperty('message')
  })
  it('Should fail to get topscorers with 403', async () => {
    const response = await request('https://api-football-v1.p.rapidapi.com')
      .get('/v3/players/topscorer')
      .query({'league': '39', 'season': '2020'})
      .set({ "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "2cb37ea53fmshe6b4d6177ba7579p1cd6a4jsn6a245104bfdb",
      "useQueryString": true })
    expect(response.status).toBe(403)
    expect(response.body).toHaveProperty('message')
  })
}, 10000)
