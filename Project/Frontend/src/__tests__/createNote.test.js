describe('Create New Note', () => {
    it('should create a new note successfully', () => {
      const newNote = 'This is a new test note';
      const createdNote = createNote(newNote); 
      expect(createdNote).toEqual(newNote); 
    });
  });
  