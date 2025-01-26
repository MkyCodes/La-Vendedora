describe('Edit Note', () => {
    it('should edit an existing note', () => {
      const originalNote = 'Original note text';
      const updatedNote = 'Updated note text';
      const editedNote = editNote(originalNote, updatedNote); 
      expect(editedNote).toEqual(updatedNote); 
    });
  });
  