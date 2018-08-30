const cards = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,
  
    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
    },
  ]; 


  // Add new card when user hits enter or clicks button
    // Create a method
      // creates a new card object
      // pushes that cord object in to the cards array

  // Delete cards
  // Animate card flip
  // Display an error message if form files are blank

  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
      newFront: '',
      newBack: ''
    },
    methods: {
      toggleCard: (card) => {
        card.flipped = !card.flipped;
      },
      addNew: function() {
        this.cards.push({
          front: this.newFront,
          back: this.newBack,
          flipped: false
        })
      }
    }
  });