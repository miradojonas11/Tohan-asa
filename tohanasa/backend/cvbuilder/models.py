from django.db import models

# Create your models here.
class CVTemplate(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    location = models.CharField(max_length=100)
    is_seasonal = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)