const request = require('supertest')

test('1 + 1 deve ser igual a 2', () => {
  const resultadoEsperado = 2
  expect(1+1).toBe(resultadoEsperado)
})

it('', async ()=>{
    const resposta = await request('https://swapi.dev/api').get('/people/1')
    console.log(resposta.status)
    console.log(resposta.body)
})

it('', async ()=>{
    const resposta = await request('https://swapi.dev/api').get('/people/1')
    console.log(`Status: ${resposta.status}`)
})

test('Deve visualizar informações de cadastro, quando buscar por uma pessoa existente.', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/1')
    
    expect(resposta.status).toBe(200)
    expect(resposta.body.films).toBeDefined()
    expect(resposta.body.vehicles.length).toBeGreaterThan(0)
    expect(resposta.body.name).toBe('Luke Skywalker')
})

test('Deve receber uma mensagem de erro, quando buscar por uma pessoa inexistente', async () =>{
    const resposta = await request('https://swapi.dev/api').get('/people/9999')

    expect(resposta.status).toBe(404)
    expect(resposta.body.detail).toBe('Not found')
    expect(resposta.body).toMatchObject({
        detail: "Not found"
    })
})