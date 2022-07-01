describe('Spell Description Page', () => {
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
    cy.intercept('GET', 'https://www.dnd5eapi.co/api/spells/acid-arrow', {
      statusCode: 200,
      headers: {
        'x-requested-with': 'exampleClient',
      },
      fixture: 'spellObject2'
    });
    cy.visit('http://localhost:3000/')
    cy.get('#1').click()

  })

  it('Should be able to visit the main page and click on a spell to be redirected to the spell description page', () => {
    cy.url('http://localhost:3000/acid-arrow')
  })

  it('Should be able to view a all elements on the main page (NAV)', () => {
    cy.get('.page-title').should('have.text', 'Spellcaster')
    cy.get('.home-btn').should('have.text','Home')
  });

  it('Should be able to view the spells description', () => {
    cy.get('.spell-name-desc').should('have.text','Acid Arrow')
    cy.get('.casters').should('have.text','Casters: Wizard')
    cy.get('.components').should('have.text','Components: V, S, M')
    cy.get('.desc').should('have.text','Description: A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.')
    cy.get('.casting-time').should('have.text','Casting Time: 1 action')
    cy.get('.range').should('have.text','Range: 90 feet')
    cy.get('.school').should('have.text','School: Evocation')

  });

  it('Should be able to go back to the home page', () => {
    cy.get('.home-btn').click()
    cy.url('http://localhost:3000/')
  });
})
