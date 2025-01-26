# class NoteDeleteTestCase(TestCase):
#     def setUp(self):
#         # Set up a note to delete
#         self.note = Note.objects.create(title='Note to Delete', content='This note will be deleted')
#         self.url = reverse('note-detail', kwargs={'pk': self.note.pk})  # Assuming you have a URL pattern for deleting a note

#     def test_delete_note(self):
#         response = self.client.delete(self.url, format='json')
#         self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        
#         # Ensure the note was actually deleted
#         self.assertEqual(Note.objects.count(), 0)
