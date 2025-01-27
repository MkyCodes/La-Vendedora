# class NoteSearchTestCase(TestCase):
#     def setUp(self):
#         # Set up notes for searching
#         self.note1 = Note.objects.create(title='First Note', content='Content of the first note')
#         self.note2 = Note.objects.create(title='Second Note', content='Content of the second note')
#         self.url = reverse('note-list')  # Assuming you have a search URL pattern

#     def test_search_notes(self):
#         # Test searching by title
#         response = self.client.get(self.url, {'search': 'First'}, format='json')
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
        
#         # Ensure that only the first note is in the search results
#         self.assertEqual(len(response.data), 1)
#         self.assertEqual(response.data[0]['title'], 'First Note')
