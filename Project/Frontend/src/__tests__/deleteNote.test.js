describe('Delete Note', () => {
    it('should delete an existing note', () => {
      const noteToDelete = 'Note to be deleted';
      deleteNote(noteToDelete); 
      const result = getNotes(); 
      expect(result).not.toContain(noteToDelete); 
    });
  });
  