describe('Mainpage', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.dnd5eapi.co/api/spells', {
      statusCode: 200,
      body: {
        results: [
          {
            "index": "acid-arrow",
            "name": "Acid Arrow",
            "url": "/api/spells/acid-arrow"
          },
          {
            "index": "zone-of-truth",
            "name": "Zone of Truth",
            "url": "/api/spells/zone-of-truth"
          }
        ]
      }
    });
    cy.visit('http://localhost:3000/')
  })

  it('Should be able to visit the main page', () => {
    cy.url('http://localhost:3000/')
  })

  it('Should be able to view a all elements on the main page (NAV)', () => {
    cy.get('.title').should('have.text', 'Spellcaster')
    cy.get('.spell-search').should('exist')
  });

  it('Should be able to view a all elements on the main page (Spells)', () => {
    cy.get('.spell-container').children().should('have.length', 2)
  });

  it('Should be able to search for a specific spell', () => {
    cy.get('.spell-search').type('acid arrow')
    cy.get('.spell-container').children().eq(0).should('have.text', 'Acid Arrow')
  });
})
