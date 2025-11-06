from rest_framework import generics
from .models import JobOffer
from .serializers import JobOfferSerializer

# Create your views here.
class JobOfferListAPIView(generics.ListAPIView):
    queryset = JobOffer.objects.all()
    serializer_class = JobOfferSerializer
