from django.test import TestCase
from .models import Lead


class LeadModelTestCase(TestCase):
    def test_str_representation(self):
        lead = Lead.objects.create(
            name="Jenny", email="jenny@mail.com", message="New film role please"
        )
        self.assertEqual(str(lead), "jenny@mail.com")
