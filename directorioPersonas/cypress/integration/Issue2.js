describe ('Issue#2', function () {
    it('Visitar sitio”', function () {
        cy.visit('http://localhost/practica2-andrade/directorioPersonas/index.php')
    })

    it('agrega al listado principal de personas el campo “Telefono”', function () {
        cy.get('thead > tr > :nth-child(3)').next().contains('Telefono')
    })

        it('agrega con el campo “Telefono”', function () {
            cy.get('thead > tr > :nth-child(5) > .btn').click();
            cy.get(':nth-child(1) > .col-md-7 > .form-control')
                .type('Hoesmad2').should('have.value','Hoesmad2')
            cy.get('.col-md-11 > .form-control')
            .type('Hoesmad2Dire').should('have.value','Hoesmad2Dire')
            cy.get(':nth-child(2) > .col-md-7 > .form-control')
                .type('Hoesmad2Tel').should('have.value','Hoesmad2Tel')
                cy.get('.modal-footer > .btn-primary').click()
        })
        
    it('editar con el campo “Telefono”', function () {
        // cy.get('tr').length;
        cy.get(':nth-child(16) > :nth-child(5) > .btn-primary').click()
        cy.get(':nth-child(2) > .col-md-7 > .form-control')
        .type('Hoesmad2Teleditado').should('have.value','Hoesmad2Teleditado')
        cy.get('.modal-footer > .btn-primary').click()
        // cy.get('.btn-primary').last().click({force:true})
    })
})