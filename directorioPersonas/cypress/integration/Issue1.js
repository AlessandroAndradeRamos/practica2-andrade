// describe ('navegando a grucci', function () {
//     it('Navegación por grucci gang', function () {
//         cy.visit('http://localhost/practica2-andrade/directorioPersonas/index.php')
//     })
//     it('Navegando por tu gfa', function () {
//         cy.get('thead > tr > :nth-child(5)').contains('Nuevo')
//         cy.click
//     })
// })

describe ('Issue#1', function () {
    it('Visitar sitio”', function () {
        cy.visit('http://localhost/practica2-andrade/directorioPersonas/index.php')
    })

    it('agrega al listado principal de personas el campo “Dirección”', function () {
        cy.get('thead > tr > :nth-child(3)').contains('Dirección')
    })
})