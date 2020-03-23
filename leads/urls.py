from django.urls import path
from .views import LeadListCreate

urlpatterns = [path("api/", LeadListCreate.as_view())]
