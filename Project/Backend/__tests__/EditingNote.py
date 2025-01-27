# class NoteUpdateTestCase(TestCase):
#     def setUp(self):
#         # Set up a note to edit
#         self.note = Note.objects.create(title='Old Title', content='Old content')
#         self.url = reverse('note-detail', kwargs={'pk': self.note.pk})  # Assuming you have a URL pattern for updating a note

#     def test_update_note(self):
#         data = {
#             'title': 'Updated Title',
#             'content': 'Updated content',
#         }
#         response = self.client.put(self.url, data, format='json')
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
        
#         # Ensure the note was updated in the database
#         self.note.refresh_from_db()
#         self.assertEqual(self.note.title, 'Updated Title')
#         self.assertEqual(self.note.content, 'Updated content')
