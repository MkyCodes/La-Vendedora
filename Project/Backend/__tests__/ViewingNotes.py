# #class NoteListViewTestCase(TestCase):
#     def setUp(self):
#         # Set up a note
#         self.note = Note.objects.create(title='Test Note', content='This is a test note.')
#         self.url = reverse('note-list')  # Assuming you have a URL pattern for listing notes

#     def test_view_notes(self):
#         response = self.client.get(self.url, format='json')
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
        
#         # Check if the note is included in the response
#         self.assertEqual(len(response.data), 1)
#         self.assertEqual(response.data[0]['title'], 'Test Note')
