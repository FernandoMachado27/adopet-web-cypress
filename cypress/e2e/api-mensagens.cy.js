describe('API Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwNzM1OTc2OC0xMGY3LTQxYjQtOGIzZS1hNTVhY2JhY2MxM2UiLCJhZG9wdGVyTmFtZSI6IkZlcm5hbmRvMSIsImlhdCI6MTc2MTc4NjY3MCwiZXhwIjoxNzYyMDQ1ODcwfQ.x9_-JmIA_Omctq9YBetSCFhcR8gmcYOFHouQiLUhdSw`

    it('Mensagem da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/07359768-10f7-41b4-8b3e-a55acbacc13e',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})