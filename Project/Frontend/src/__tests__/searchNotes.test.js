describe('Search Notes', () => {
    it('should return matching notes for a search query', () => {
      const notesList = ['Buy groceries', 'Finish homework', 'Call mom'];
      notesList.forEach(note => createNote(note));
      
      const searchQuery = 'homework';
      const searchResults = searchNotes(searchQuery); 
      expect(searchResults).toEqual(['Finish homework']); 
    });
  });
  