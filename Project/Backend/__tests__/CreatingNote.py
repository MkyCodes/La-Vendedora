# from django.test import TestCase
# from django.urls import reverse
# from rest_framework import status
# from .models import Note

# class NoteCreateTestCase(TestCase):
  #  def setUp(self):
        # Here, you can create any necessary setup like users or data
    #    self.url = reverse('note-list')  # Assuming you have a URL pattern for creating notes
    
 #   def test_create_note_success(self):
   #     data = {
    #        'title': 'Test Note',
    #        'content': 'This is a test note.',
 #       }
    #    response = self.client.post(self.url, data, format='json')
    #    self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        
        # Ensure the note was actually created in the database
    #    self.assertEqual(Note.objects.count(), 1)
     #   self.assertEqual(Note.objects.get().title, 'Test Note')
