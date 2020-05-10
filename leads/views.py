from leads.models import Lead
from leads.serializers import LeadSerializer
from rest_framework import generics


class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all().order_by("-id")
    serializer_class = LeadSerializer
